<script>
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
    

    let { sortedData, pageLimit, colourdict } = $props();

let firstCard = $state(0)
let lastCard = $state(firstCard + pageLimit)

let lenno = sortedData.length
let rows = $derived(sortedData.slice(firstCard, lastCard))

let shuffled 

let isFirstPage = $derived(lastCard - pageLimit == 0 ? true : false);
let hasNextPage = $derived(lastCard >= lenno ? false: true)
let showPrev = $derived(isFirstPage ? "hidden" : 'visible')
let showNext = $derived(!hasNextPage ?  'hidden' : "visible")



    

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

console.log("Rows: ", rows)

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

    <div id='pagination'  class='mx-auto flex items-center justify-between text-xl pb-5 pt-5'>


    <button id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}' on:click={() => scrolly.scrollIntoView(false)}>Prev</button>
        <!-- <div id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}'>Prev</div> -->


        <span class='text-xs font-semibold'>{lastCard}/{lenno}</span>
    
        <button id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}' on:click={() => scrolly.scrollIntoView(false)}>Next</button>
        <!-- <div id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}'>Next</div> -->
    
    </div>


<div class="container gap-6 mx-auto items-center text-center">



        {#each rows as item}
        <div class='p-5 max-w-[600px] mt-5 mb-5 [&:not(:last-child)]:border mx-auto' style="border-color:{colouriser(item.Category)}; border-width: 5px; border-opacity:0.1">
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
            <a href='{item.Url}' target='_blank'>{getBaseUrl(item.Url)}</a>
            <p class='text-xs italic'>Added: {fixDate(item.Date)}</p>
            <p class='text-xs italic'> {item.Tool}</p>
        </div>
    {/each}

<!-- {getBaseUrl(item.URL)} -->
</div>



<div id='pagination' class='mx-auto flex items-center justify-between text-xl pt-10'>

    <button id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}' on:click={() => scrolly.scrollIntoView(false)}>Prev</button>
        <!-- <div id='left' on:click={() => firstCard -= pageLimit} on:click={() => lastCard -= pageLimit} style='visibility: {showPrev}'>Prev</div> -->


        <span class='text-xs font-semibold'>{lastCard}/{lenno}</span>
    
        <button id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}' on:click={() => scrolly.scrollIntoView(false)}>Next</button>
        <!-- <div id='right' on:click={() => firstCard += pageLimit} on:click={() => lastCard += pageLimit} style='visibility: {showNext}'>Next</div> -->
</div>

    <!-- </div> -->


<style>

.postList {
    clear: left;
}

</style>