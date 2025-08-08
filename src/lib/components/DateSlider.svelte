<!-- DateSlider.svelte -->
<script>
  export let sortedData;
  export let selectedDate;
  export let dateBelow = false;
  export let scrolly = null;
  
  $: minDate = Math.min(...sortedData.map(d => new Date(d.Date).getTime()));
  $: maxDate = Math.max(...sortedData.map(d => new Date(d.Date).getTime()));
  $: datePosition = ((maxDate - selectedDate) / (maxDate - minDate)) * 100;
  
  // Determine text alignment and transform based on position
  $: if (datePosition < 30) {
    textTransform = 'translateX(0%)';
    textAlign = 'left';
  } else if (datePosition > 70) {
    textTransform = 'translateX(-100%)';
    textAlign = 'right';
  } else {
    textTransform = 'translateX(-50%)';
    textAlign = 'center';
  }
  
  let textTransform = 'translateX(-50%)';
  let textAlign = 'center';
</script>

<div style="margin-top: 10px; width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 1.25rem 0;">
  <div style="flex: 1; position: relative;">
    <input 
      type="range" 
      class="date-slider" 
      min={minDate} 
      max={maxDate} 
      bind:value={selectedDate}
      on:input={() => scrolly?.scrollIntoView(false)}
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