<!-- IndexSlider.svelte -->
<script>
  let { sortedData, selectedIndex = $bindable(0), increment = 12, indexBelow = false, scrolly = null } = $props();
  
  const minIndex = $derived(0);
  const maxIndex = $derived(sortedData.length - 1);
  const indexPosition = $derived(((selectedIndex - minIndex) / (maxIndex - minIndex)) * 100);

  const selectedDate = $derived(sortedData[selectedIndex]?.Date);

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

  <div class="flex-1 relative px-6">
    <input
      type="range"
      class="index-slider w-full cursor-pointer bg-transparent appearance-none"
      min={minIndex} 
      max={maxIndex} 
      step={increment}
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
  .index-slider {
    border-color: var(--color-ui-accent);
    height: 4px;
  }
  .index-slider::-webkit-slider-runnable-track {
    height: 4px;
    background: var(--color-ui-accent);
    border-radius: 2px;
    opacity: 0.4;
  }
  .index-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-ui-accent);
    cursor: pointer;
    margin-top: -7px;
  }
  .index-slider::-moz-range-track {
    height: 4px;
    background: var(--color-ui-accent);
    border-radius: 2px;
    opacity: 0.4;
  }
  .index-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-ui-accent);
    cursor: pointer;
    border: none;
  }

  button {
    color: var(--color-ui-accent);
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>