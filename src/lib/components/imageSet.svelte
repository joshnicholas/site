<script>
import { onMount } from 'svelte';
import Card from '$lib/components/card.svelte'
// import Radio from '$lib/components/radio.svelte'
import Bigcard from '$lib/components/bigcard.svelte'

export let datah
export let pageLimit
export let containerWidth


let firstImage = 0
let lastImage = firstImage + pageLimit

let modalOpen = false;
let modalImage
$: modalShow = modalOpen == false ? "invisible" : 'visible'


let modalRow 


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
// $: console.log("firstImage: ", firstImage)


// $: console.log("modalOpen: ", modalOpen)

// $: console.log("shuffled: ", shuffled)
// $: console.log("rows: ", rows)
// $: console.log("sortBy: ", sortBy)
// $: console.log("firstImage: ", firstImage)
// $: console.log("lastImage: ", lastImage)
</script>


<!-- {#key modalOpen}
{#if modalOpen}
{#if containerWidth > 600}


<div id="myModal" class="fixed z-40 {modalShow} max-w-[800px] flex inline justify-center items-center text-center align-middle" style="background-color:#FADA7A" >

    <div class='margin-auto min-w-min justify-center items-center text-center' on:click={() => modalOpen = false}>
    <Bigcard {rows} {modalImage} />

    <span class="{modalShow}" on:click={() => modalOpen= false}>Close</span>
    </div>


</div>

{/if}
{/if}
{/key} -->


    <!-- <Radio {options} fontSize={16} legend='Sort by' bind:userSelected={sortBy}/> -->


<div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center">

    <!-- {#if modalOpen}



    {/if} -->

    <!-- {#key rows} -->
    {#each rows as row, index}

        <Card {index} bind:row={row} bind:modalImage={modalImage} bind:modalOpen={modalOpen}/>

    {/each}
    <!-- {/key} -->


</div>



<div id='pagination' class='mx-auto flex items-center justify-between text-xl pt-10 pb-10'>

    <div id='left' on:click={() => firstImage -= pageLimit} on:click={() => lastImage -= pageLimit}>{#if !isFirstPage}Previous{/if}</div>
    <div id='right' class='justify-end' on:click={() => firstImage += pageLimit} on:click={() => lastImage += pageLimit}>{#if hasNextPage}Next{/if}</div>

</div>

<div class='items-center mx-auto text-xl text-center'>

<span>{lastImage}/{lenno} scribbles</span>

</div>



<style>
/* The Modal (background) */


/* Modal Content/Box */



</style>
