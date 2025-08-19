<!-- IndexSlider.svelte -->
<script>
  let { sortedData, selectedIndex = $bindable(0), indexBelow = false, scrolly = null } = $props();
  
  const minIndex = $derived(0);
  const maxIndex = $derived(sortedData.length - 1);
  const indexPosition = $derived(((selectedIndex - minIndex) / (maxIndex - minIndex)) * 100);
  
  // Get the date from the selected index
  const selectedDate = $derived(sortedData[selectedIndex]?.Date);

  // console.log("selectedDate: ", selectedDate)
  

</script>

<div class="mt-2.5 w-full flex items-center gap-2 py-5">
  <div class="flex-1 relative px-6">
    <input 
      type="range" 
      class="index-slider w-full h-4 cursor-pointer bg-transparent border border-black rounded-lg appearance-none"
      min={minIndex} 
      max={maxIndex} 
      step="1"
      bind:value={selectedIndex}
      oninput={() => {
        // console.log('Current index:', selectedIndex);
        // console.log("selectedDate: ", selectedDate)
        scrolly?.scrollIntoView(false);
      }}
    />
    
    <!-- Index text that follows slider position -->
    <!-- <div 
      style="
        position: absolute;
        left: {indexPosition}%;
        {indexBelow ? 'bottom: -25px;' : 'top: -25px;'}
        font-size: 0.75rem;
        pointer-events: none;
        z-index: 10;
        white-space: nowrap;
        transform: translateX(-50%);
        max-width: calc(100% - 50px);
        overflow: hidden;
        text-overflow: ellipsis;
      "
    >
      {selectedIndex}
    </div> -->
  </div>
</div>

<style>
  .index-slider::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }
  .index-slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    border: none;
  }
</style>