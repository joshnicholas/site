<script>
import { onMount } from 'svelte';
import Card from '$lib/components/card.svelte'
// import Radio from '$lib/components/radio.svelte'
// import Bigcard from '$lib/components/bigcard.svelte'

export let datah
export let pageLimit
// export let containerWidth


let firstImage = 0
let lastImage = firstImage + pageLimit



let lenno
let rows
let shuffled 
onMount(() => {

    // shuffled = sorter(datah, sortBy, firstImage, lastImage)
    lenno = datah.length
    rows = datah.slice(firstImage, lastImage)
    // rows = shuffled.slice(firstImage, lastImage)

  })

  $: rows = datah.slice(firstImage, lastImage)




$: isFirstPage = lastImage - pageLimit == 0 ? true : false;
$: hasNextPage = lastImage >= lenno ? false: true;
$: showPrev = isFirstPage ? "hidden" : 'visible'
$: showNext = !hasNextPage ?  'hidden' : "visible"


</script>



    <div id='pagination' class='mx-auto flex items-center justify-between text-xl pb-5 pt-5'>


    <button id='left' on:click={() => firstImage -= pageLimit} on:click={() => lastImage -= pageLimit} style='visibility: {showPrev}'>Prev</button>
        <!-- <div id='left' on:click={() => firstImage -= pageLimit} on:click={() => lastImage -= pageLimit} style='visibility: {showPrev}'>Prev</div> -->


        <span class='text-xs font-semibold'>{lastImage}/{lenno}</span>
    
        <button id='right' on:click={() => firstImage += pageLimit} on:click={() => lastImage += pageLimit} style='visibility: {showNext}'>Next</button>
        <!-- <div id='right' on:click={() => firstImage += pageLimit} on:click={() => lastImage += pageLimit} style='visibility: {showNext}'>Next</div> -->
    
    </div>


<div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center">


    {#each rows as row, index}

        <Card {index} bind:row={row}/>

    {/each}


</div>



<div id='pagination' class='mx-auto flex items-center justify-between text-xl pt-10'>

    <button id='left' on:click={() => firstImage -= pageLimit} on:click={() => lastImage -= pageLimit} style='visibility: {showPrev}'>Prev</button>
        <!-- <div id='left' on:click={() => firstImage -= pageLimit} on:click={() => lastImage -= pageLimit} style='visibility: {showPrev}'>Prev</div> -->


        <span class='text-xs font-semibold'>{lastImage}/{lenno}</span>
    
        <button id='right' on:click={() => firstImage += pageLimit} on:click={() => lastImage += pageLimit} style='visibility: {showNext}'>Next</button>
        <!-- <div id='right' on:click={() => firstImage += pageLimit} on:click={() => lastImage += pageLimit} style='visibility: {showNext}'>Next</div> -->
</div>


<style>
/* The Modal (background) */


/* Modal Content/Box */



</style>
