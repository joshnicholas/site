<script>
import { timeParse, timeFormat } from 'd3-time-format'
import { getRandomBorderColor } from '$lib/config/colors.js'
import rough from 'roughjs'

let { row, index } = $props();

let showText = $state(false)
let borderColor = getRandomBorderColor()

let dateParse = timeParse("%Y-%m-%d")
let dateFormat = timeFormat("%b %Y")

const SKETCH_ROUGHNESS = 3
const SKETCH_BOWING = 1.5
const SKETCH_STROKE_WIDTH = 5
const SKETCH_MAX_OFFSET = 3
// Reserved space outside the photo for the frame to live in, generous enough
// that roughness/bowing jitter never pushes the line past the SVG viewBox.
const FRAME_MARGIN = 20

const w = row["Width"]
const h = row["Height"]
const outerW = w + FRAME_MARGIN * 2
const outerH = h + FRAME_MARGIN * 2
const photoLeftPct = (FRAME_MARGIN / outerW) * 100
const photoTopPct = (FRAME_MARGIN / outerH) * 100
const photoWidthPct = (w / outerW) * 100
const photoHeightPct = (h / outerH) * 100

// How many times the frame gets "redrawn", biased toward a single pass:
// 1 -> 50%, 2 -> 30%, 3 -> 20%.
function pickPassCount() {
  const r = Math.random()
  if (r < 0.5) return 1
  if (r < 0.8) return 2
  return 3
}
const passCount = pickPassCount()

const generator = rough.generator()
// Rectangle hugs just outside the photo's real edge (offset out by half the
// stroke width) rather than overlapping the image content.
const sketchyPaths = []
for (let i = 0; i < passCount; i++) {
  const sketchyRect = generator.rectangle(
    -SKETCH_STROKE_WIDTH / 2,
    -SKETCH_STROKE_WIDTH / 2,
    w + SKETCH_STROKE_WIDTH,
    h + SKETCH_STROKE_WIDTH,
    {
      roughness: SKETCH_ROUGHNESS,
      bowing: SKETCH_BOWING,
      maxRandomnessOffset: SKETCH_MAX_OFFSET,
      stroke: 'currentColor',
      strokeWidth: SKETCH_STROKE_WIDTH,
      disableMultiStroke: true,
    }
  )
  sketchyPaths.push(...generator.toPaths(sketchyRect))
}
</script>

<button
  type="button"
  class="border-0 p-0 bg-transparent cursor-pointer w-full block relative"
  style='color:{borderColor};aspect-ratio:{outerW}/{outerH};'
  onclick={() => showText = !showText}
>
  <img
    class='cardy block'
    id={index}
    width={w}
    height={h}
    style='position:absolute;left:{photoLeftPct}%;top:{photoTopPct}%;width:{photoWidthPct}%;height:{photoHeightPct}%;'
    src="/images/{row['webp_path']}"
    alt={row["Title"]}
    decoding="async"
    fetchpriority={index < 3 ? "high" : "auto"}
  />

  <svg class="sketchy-border" viewBox="{-FRAME_MARGIN} {-FRAME_MARGIN} {outerW} {outerH}" preserveAspectRatio="none" aria-hidden="true">
    {#each sketchyPaths as p}
      <path d={p.d} stroke={p.stroke} stroke-width={p.strokeWidth} fill={p.fill ?? 'none'} stroke-linecap="round" stroke-linejoin="round" />
    {/each}
  </svg>

  {#if showText}
  <div class="absolute flex items-center justify-center bg-black bg-opacity-60 p-4"
    style='left:{photoLeftPct}%;top:{photoTopPct}%;width:{photoWidthPct}%;height:{photoHeightPct}%;'>
    <div class='text-center text-white'>
      <h2 class='text-xl font-semibold mb-1'>{row["Title"]}</h2>
      <p class='text-sm'>{dateFormat(dateParse(row["Date"]))}</p>
    </div>
  </div>
  {/if}
</button>



<style>

.cardy {
    display: block;
    color: transparent; /* hide the alt text browsers show while the image is still loading */
}

.sketchy-border {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

</style>