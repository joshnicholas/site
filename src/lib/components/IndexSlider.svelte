<!-- IndexSlider.svelte -->
<script>
  import rough from 'roughjs'

  let { sortedData, selectedIndex = $bindable(0), increment = 12, indexBelow = false, scrolly = null } = $props();

  const minIndex = $derived(0);
  const maxIndex = $derived(sortedData.length - 1);
  const indexPosition = $derived(((selectedIndex - minIndex) / (maxIndex - minIndex)) * 100);

  const selectedDate = $derived(sortedData[selectedIndex]?.Date);

  const SKETCH_ROUGHNESS = 1.5
  const SKETCH_BOWING = 1
  const SKETCH_STROKE_WIDTH = 3
  const SKETCH_MAX_OFFSET = 2.5
  const SKETCH_PASSES = 1 // how many times the line gets "redrawn"
  const SKETCH_WAVES = 6 // how many back-and-forth segments make up the line
  const TRACK_H = 48 // extra headroom above/below center so wobble + thumb never clip
  const TRACK_MARGIN = 14
  const THUMB_RADIUS = 9
  // A fixed reference coordinate space, not the real measured pixel width.
  // The SVG viewBox stretches horizontally to whatever width the slider ends
  // up rendering at (that only changes the apparent wave "density" slightly,
  // never the vertical wobble amplitude, since TRACK_H maps 1:1 to real CSS
  // pixels). This lets the whole wobble be computed once, up front, instead
  // of waiting on a client-side width measurement before anything can draw.
  const REFERENCE_W = 1000
  // Fixed (not random) so the server-rendered HTML and the client's
  // post-hydration recompute always produce the identical shape - otherwise
  // the line would be drawn once from the server's random draw, then redrawn
  // moments later from a different client-side random draw.
  const SKETCH_SEED = 42

  const generator = rough.generator()

  const allPasses = (() => {
    const paths = []
    const points = []
    for (let i = 0; i <= SKETCH_WAVES; i++) {
      points.push([TRACK_MARGIN + ((REFERENCE_W - TRACK_MARGIN * 2) * i) / SKETCH_WAVES, TRACK_H / 2])
    }
    for (let i = 0; i < SKETCH_PASSES; i++) {
      const path = generator.linearPath(points, {
        roughness: SKETCH_ROUGHNESS,
        bowing: SKETCH_BOWING,
        maxRandomnessOffset: SKETCH_MAX_OFFSET,
        stroke: 'currentColor',
        strokeWidth: SKETCH_STROKE_WIDTH,
        disableMultiStroke: true,
        preserveVertices: true, // keeps segment joints connected (no gaps between waves)
        seed: SKETCH_SEED + i,
      })
      paths.push(...generator.toPaths(path))
    }
    return paths
  })()

  function yAtX(pathEl, targetX) {
    const len = pathEl.getTotalLength()
    let lo = 0, hi = len
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2
      if (pathEl.getPointAtLength(mid).x < targetX) lo = mid
      else hi = mid
    }
    return pathEl.getPointAtLength(lo).y
  }

  let primaryPathEl = $state(null)
  let thumbY = $state(TRACK_H / 2) // real px, maps 1:1 since TRACK_H == real track height

  const marginPct = (TRACK_MARGIN / REFERENCE_W) * 100
  const thumbLeftPct = $derived(marginPct + (indexPosition / 100) * (100 - marginPct * 2))

  $effect(() => {
    const pct = indexPosition
    if (!primaryPathEl) return
    const targetX = TRACK_MARGIN + (pct / 100) * (REFERENCE_W - TRACK_MARGIN * 2)
    thumbY = yAtX(primaryPathEl, targetX)
  })

  function goToPrev() {
    if (selectedIndex > minIndex) {
      selectedIndex = Math.max(selectedIndex - increment, minIndex);
      scrolly?.scrollIntoView(false);
    }
  }

  function goToNext() {
    if (selectedIndex < maxIndex) {
      selectedIndex = Math.min(selectedIndex + increment, maxIndex);
      scrolly?.scrollIntoView(false);
    }
  }
</script>

<div class="mt-2.5 w-full flex items-center gap-2 py-5">
  <button
    class="cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={goToPrev}
    disabled={selectedIndex <= minIndex}
  >
    Prev
  </button>

  <div class="flex-1 relative px-6 slider-track-wrap">
    <svg class="sketchy-track" viewBox="0 0 {REFERENCE_W} {TRACK_H}" preserveAspectRatio="none" aria-hidden="true">
      {#if allPasses.length > 0}
        <path d={allPasses[0].d} stroke={allPasses[0].stroke} stroke-width={allPasses[0].strokeWidth} fill="none" stroke-linecap="round" stroke-linejoin="round" bind:this={primaryPathEl} />
        {#each allPasses.slice(1) as p, i (i)}
          <path d={p.d} stroke={p.stroke} stroke-width={p.strokeWidth} fill={p.fill ?? 'none'} stroke-linecap="round" stroke-linejoin="round" />
        {/each}
      {/if}
    </svg>
    <div class="thumb-bounds">
      <div class="sketchy-thumb" style="left:{thumbLeftPct}%;top:{thumbY}px;width:{THUMB_RADIUS * 2}px;height:{THUMB_RADIUS * 2}px;margin-left:-{THUMB_RADIUS}px;margin-top:-{THUMB_RADIUS}px;"></div>
    </div>
    <input
      type="range"
      class="index-slider w-full cursor-pointer bg-transparent appearance-none"
      min={minIndex}
      max={maxIndex}
      step="1"
      bind:value={selectedIndex}
      oninput={() => {
        scrolly?.scrollIntoView(false);
      }}
    />
  </div>

  <button
    class="cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={goToNext}
    disabled={selectedIndex >= maxIndex}
  >
    Next
  </button>
</div>

<style>

@keyframes radio-pulse {
  from {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent-color) 80%, transparent);
  }
  to {
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--accent-color) 0%, transparent);
  }
}

input[type="radio"]:checked + label::before {
  border: 1px solid var(--gray, #ccc);
  border-radius: 50%;
  animation: radio-pulse 1.6s ease-out infinite;
}

  .slider-track-wrap {
    display: flex;
    align-items: center;
    height: 48px;
    color: var(--color-slider);
  }

  .sketchy-track {
    position: absolute;
    left: 24px;
    right: 24px;
    top: 0;
    width: calc(100% - 48px);
    height: 100%;
    pointer-events: none;
  }

  .thumb-bounds {
    position: absolute;
    left: 24px;
    right: 24px;
    top: 0;
    height: 100%;
    pointer-events: none;
  }

  .sketchy-thumb {
    position: absolute;
    border-radius: 50%;
    background: currentColor;
  }

  .index-slider {
    position: relative;
    height: 48px;
    opacity: 0;
  }
  .index-slider::-webkit-slider-runnable-track {
    height: 48px;
    background: transparent;
  }
  .index-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }
  .index-slider::-moz-range-track {
    height: 48px;
    background: transparent;
  }
  .index-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    border: none;
  }

  button {
    color: var(--color-slider);
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>
