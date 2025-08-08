<script>
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
        import BackToTop from './BackToTop.svelte';

    let { sortedData, pageLimit, colourdict } = $props();
      import DateSlider from './DateSlider.svelte';

// let firstCard = $state(0)
// let lastCard = $state(firstCard + pageLimit)

let lenno = sortedData.length
// let rows = $derived(sortedData.slice(firstCard, lastCard))
// let dates = $derived(rows.map(row => new Date(row.Date)));
// let selectedDate = $state(Math.min(...dates.map(d => d.getTime())));
// // console.log('dates: ', dates)

// let shuffled 

// let isFirstPage = $derived(lastCard - pageLimit == 0 ? true : false);
// let hasNextPage = $derived(lastCard >= lenno ? false: true)
// let showPrev = $derived(isFirstPage ? "hidden" : 'visible')
// let showNext = $derived(!hasNextPage ?  'hidden' : "visible")

// let selectedDate = $state(sortedData.length > 0 ? new Date(sortedData[0].Date).getTime() : 0);
  let selectedDate = $state(sortedData.length > 0 ? new Date(sortedData[0].Date).getTime() : 0);


$effect(() => {
 if (sortedData.length > 0) {
   selectedDate = new Date(sortedData[0].Date).getTime();
 }
});

let getRowsAroundDate = $derived(() => {
 if (sortedData.length === 0) return [];
 
 // Find the index of the item closest to selectedDate
 let closestIndex = 0;
 let closestDiff = Math.abs(new Date(sortedData[0].Date).getTime() - selectedDate);
 
 for (let i = 1; i < sortedData.length; i++) {
   const diff = Math.abs(new Date(sortedData[i].Date).getTime() - selectedDate);
   if (diff < closestDiff) {
     closestDiff = diff;
     closestIndex = i;
   }
 }
 
 // Try to get 4 cards on each side (9 total including center)
 let start = Math.max(0, closestIndex - 4);
 let end = Math.min(sortedData.length, closestIndex + 5);
 
 // If we can't get 4 on one side, compensate with the other
 const totalNeeded = 9;
 if (end - start < totalNeeded) {
   if (start === 0) {
     end = Math.min(sortedData.length, totalNeeded);
   } else if (end === sortedData.length) {
     start = Math.max(0, sortedData.length - totalNeeded);
   }
 }
 
 return sortedData.slice(start, end);
});

let rows = $derived(getRowsAroundDate());
let dates = $derived(rows.map(row => new Date(row.Date)));
    

        function getBaseUrl(url) {
 try {
   const urlObj = new URL(url);
   let hostname = urlObj.hostname;

   if (hostname.startsWith('www.')) {
     hostname = hostname.substring(4);
   }
   
   const parts = hostname.split('.');
   
   // If only 2 parts, return as is (e.g., "example.com")
   if (parts.length <= 2) {
     return hostname;
   }
   
   // Check if last part is a country code (2 letters) and second-to-last is likely generic TLD
   const lastPart = parts[parts.length - 1];
   const secondLastPart = parts[parts.length - 2];
   
   // Common generic TLDs that appear before country codes
   const genericTlds = ['com', 'co', 'org', 'net', 'edu', 'gov', 'mil', 'int'];
   
   if (lastPart.length === 2 && genericTlds.includes(secondLastPart)) {
     // Three-part domain like "example.com.au"
     return parts.slice(-3).join('.');
   }
   
   // Default: return last two parts (domain + TLD)
   return parts.slice(-2).join('.');
   
 } catch (error) {
    console.log("Error: ", url)
   console.error('Invalid URL:', error);
   return null;
 }
}


function fixDate(thingo){

const date = new Date(thingo);

return `${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`;

}

let scrolly

function colouriser(thingo){

    // console.log("thingo: ", thingo)

    if (Object.keys(colourdict).includes(thingo)){
        return colourdict[thingo]
    } else {
        '#007cc9'
    }

}


  let slider;
  let sliderContainer;
  let overlayPosition = 0;

  $effect(() => {
    if (slider && sliderContainer && selectedDate) {
      const min = parseFloat(slider.min);
      const max = parseFloat(slider.max);
      const percent = (selectedDate - min) / (max - min);
      const sliderWidth = slider.offsetWidth;
      
      // For RTL, reverse the percentage
      const reversedPercent = 1 - percent;
      overlayPosition = reversedPercent * sliderWidth;
    }
  });

    </script>

    <!-- <div class='postList max-w-[600px]'> -->

        <!-- {#each sortedData as item}
        <div class='p-5 mt-5 mb-5 [&:not(:last-child)]:border mx-auto' style="border-color: {dicto[item.Category]}; border-width: 5px;">
          {#if item.Title}
          <h2 class='text-lg font-bold mb-4'>
              {item.Title}
          </h2>
          {/if}

          {#if item.Quote}
                <blockquote class='text-lg italic mb-4 border-l-4 border-black pl-4'>
                    "{item.Quote}"
                </blockquote>
            {/if}
            
            {#if item.Text}
                <p class='mb-4'>
                    {item.Text}
                </p>
            {/if}
            <a href='{item.URL}' target='_blank'>{getBaseUrl(item.URL)}</a>
            <p class='text-xs italic'> {fixDate(item.Date)}</p>
            <p class='text-xs italic'> {item.Tool}</p>
        </div>
    {/each} -->


    <div bind:this={scrolly}></div>

    <!-- <div id='pagination'  class='mx-auto flex items-center justify-between text-xl pb-5 pt-5'> -->


    <!-- <button id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}' on:click={() => scrolly.scrollIntoView(false)}>Prev</button>


        <span class='text-xs font-semibold'>{Math.min(lastCard, lenno)}/{lenno}</span>
    
        <button id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}' on:click={() => scrolly.scrollIntoView(false)}>Next</button>
    
    </div> -->


<div class="container gap-6 mx-auto items-center text-center">

<DateSlider bind:selectedDate {sortedData} {scrolly} />
<!-- <div class="w-full flex items-center gap-2 py-5">
<div class="flex-1 relative">
  <input 
    type="range" 
    class="w-full h-4 cursor-pointer bg-transparent border border-black rounded-lg appearance-none slider-black" 
    min={Math.min(...sortedData.map(d => new Date(d.Date).getTime()))} 
    max={Math.max(...sortedData.map(d => new Date(d.Date).getTime()))} 
    bind:value={selectedDate}
    style="direction: rtl"
  />
  

  <div 
    class="absolute text-xs pointer-events-none z-10 text-center whitespace-nowrap"
    style="left: {((Math.max(...sortedData.map(d => new Date(d.Date).getTime())) - selectedDate) / (Math.max(...sortedData.map(d => new Date(d.Date).getTime())) - Math.min(...sortedData.map(d => new Date(d.Date).getTime())))) * 100}%; top: -30px; transform: translateX(-50%);"
  >
    {new Date(selectedDate).getDate()} {new Date(selectedDate).toLocaleDateString('en', {month: 'short'})}
  </div>
</div>

<span class="text-sm pt-5 pb-5">{new Date(Math.min(...sortedData.map(d => new Date(d.Date).getTime()))).getDate()}/{new Date(Math.min(...sortedData.map(d => new Date(d.Date).getTime()))).getMonth() + 1}/{new Date(Math.min(...sortedData.map(d => new Date(d.Date).getTime()))).getFullYear().toString().slice(-2)}</span>
</div> -->

        <!-- {#each rows as item}
        <div class='p-5 max-w-[800px] mt-5 mb-5 [&:not(:last-child)]:border mx-auto' style="border-color:{colouriser(item.Category)}; border-width: 5px; border-opacity:0.1">
          {#if item.Title}
          <a href='{item.Url}' target='_blank'><h2 class='text-lg font-bold mb-4'>
              {item.Title}
          </h2></a>
          {/if}

          {#if item.Quote}
                <blockquote class='text-lg italic mb-4 border-l-4 border-black pl-4'>
                    "{item.Quote}"
                </blockquote>
            {/if}
            
            {#if item.Text}
                <p class='mb-4'>
                    {item.Text}
                </p>
            {/if}
<div class="flex flex-col sm:flex-row items-center justify-center sm:gap-2">
  <a href='{item.Url}' target='_blank'>{getBaseUrl(item.Url)}</a>
  <p class='text-xs italic sm:mb-0'>Added: {fixDate(item.Date)}</p>
</div>

        </div>
    {/each} -->


<ul class="max-w-[800px] mx-auto space-y-2 list-none">
  {#each rows as item}
    <li class="relative pl-6 text-left">
      <!-- Custom colored bullet point -->
      <div 
        class="absolute left-0 top-2 w-3 h-3 rounded-full" 
        style="background-color: {colouriser(item.Category)}">
      </div>
      
      {#if item.Title}
        <a href='{item.Url}' target='_blank' class='font-bold text-black'>
          {item.Title}
        </a>
      {/if}

      {#if item.Quote && item.Title}
        <span> - </span>
      {/if}

      {#if item.Quote}
        <span class='italic'>
          "{item.Quote}"
        </span>
      {/if}
      
      {#if item.Text}
        <span>
          {item.Text}
        </span>
      {/if}
        <span> - </span>
      <span>
        <a href='{item.Url}' target='_blank'>{getBaseUrl(item.Url)}</a>
      </span>
    </li>
  {/each}
</ul>


<!-- {getBaseUrl(item.URL)} -->
</div>
<!-- <DateSlider bind:selectedDate {sortedData} dateBelow={true} on:input={() => window.scrollTo(0, document.body.scrollHeight)} /> -->


<!-- <div id='pagination' class='mx-auto flex items-center justify-between text-xl pt-10'>

    <button id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}' on:click={() => scrolly.scrollIntoView(false)}>Prev</button>


        <span class='text-xs font-semibold'>{Math.min(lastCard, lenno)}/{lenno}</span>
    
        <button id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}' on:click={() => scrolly.scrollIntoView(false)}>Next</button>
</div> -->

    <!-- </div> -->

<BackToTop />

<style>
.postList {
    clear: left;
}

 .slider-black::-webkit-slider-thumb {
   appearance: none;
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background: black;
   cursor: pointer;
 }

 .slider-black::-moz-range-thumb {
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background: black;
   cursor: pointer;
   border: none;
 }
</style>