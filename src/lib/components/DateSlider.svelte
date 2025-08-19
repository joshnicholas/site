<!-- DateSlider.svelte -->
<script>
  let { sortedData, selectedDate = $bindable(), dateBelow = false, scrolly = null } = $props();
  
  const minDate = $derived(Math.min(...sortedData.map(d => new Date(d.Date).getTime())));
  const maxDate = $derived(Math.max(...sortedData.map(d => new Date(d.Date).getTime())));
  const datePosition = $derived(((maxDate - selectedDate) / (maxDate - minDate)) * 100);
  
  // Determine text alignment and transform based on position
  const textTransform = $derived(() => {
    if (datePosition < 30) {
      return 'translateX(0%)';
    } else if (datePosition > 70) {
      return 'translateX(-100%)';
    } else {
      return 'translateX(-50%)';
    }
  });
  
  const textAlign = $derived(() => {
    if (datePosition < 30) {
      return 'left';
    } else if (datePosition > 70) {
      return 'right';
    } else {
      return 'center';
    }
  });
</script>

<div style="margin-top: 10px; width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 1.25rem 0;">
  <div style="flex: 1; position: relative;">
    <input 
      type="range" 
      class="date-slider" 
      min={minDate} 
      max={maxDate} 
      bind:value={selectedDate}
      oninput={() => scrolly?.scrollIntoView(false)}
      style="direction: rtl; width: 100%; height: 1rem; cursor: pointer; background: transparent; border: 1px solid black; border-radius: 0.5rem; appearance: none;"
    />
    
    <!-- Date text that follows slider position -->
    <div 
      style="
        position: absolute;
        left: {datePosition}%;
        {dateBelow ? 'bottom: -25px;' : 'top: -25px;'}
        font-size: 0.75rem;
        pointer-events: none;
        z-index: 10;
        white-space: nowrap;
        text-align: {textAlign};
        transform: {textTransform};
      "
    >
      {new Date(selectedDate).getDate()} {new Date(selectedDate).toLocaleDateString('en', {month: 'short'})}
    </div>
  </div>
</div>

<style>
  .date-slider::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }
  .date-slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    border: none;
  }
</style>