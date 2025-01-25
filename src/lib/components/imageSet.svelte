<script>
import { onMount } from 'svelte';
import Card from '$lib/components/card.svelte'
import Radio from '$lib/components/radio.svelte'
import Bigcard from '$lib/components/bigcard.svelte'

import { shuffle, descending, ascending } from 'd3-array';
import { timeParse } from 'd3-time-format'

// export let rows
export let datah
export let pageLimit
export let containerWidth

// let props = $props()

// $: console.log(containerWidth)

let firstImage = 0
let lastImage = firstImage + pageLimit
let dateparser = timeParse("%Y-%m-%d")

let modalOpen = false;
let modalImage
$: modalShow = modalOpen == false ? "invisible" : 'visible'


function sorter(array, how, firstImage, lastImage){
    firstImage = 0
    lastImage = pageLimit
    if (how.toLowerCase() == 'random'){
        // console.log(`${how}: `, array)
        return shuffle(array).slice(firstImage, lastImage)
    } else if (how.toLowerCase() == 'oldest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return ascending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty.slice(firstImage, lastImage)
        // return shuffle(array)        
    } else if (how.toLowerCase() == 'newest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return descending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty.slice(firstImage, lastImage)
    } else if (how.toLowerCase() == 'favs'){
        let keep = ["/240711_last-full-day_0.jpg","240714_escaping-the-hu_0.jpg","240117-misty-sydney-cbd.jpg",
        "240719_pretty-sparkling-day_0.jpg","uncle_e.jpg","240425_its-getting-cold_0.jpg","240725_sending-a-whoooooole_0.jpg",
        '240711_last-full-day_0.jpg','40402_decided-to-challenge_counter.jpg','230620-escaping-the-heat.jpeg',

        ]

        return shuffle(array.filter(row => keep.includes(row['img_path']))).slice(firstImage, lastImage)
    
}
}

const options = ['Random', 'Newest', 'Oldest', 'Favs']

let sortBy = 'Random'

// sorter(datah, sortBy)

// let shuffled = sorter(datah, sortBy)
// let shuffled = [...datah]
// $: shuffled = sorter(datah, sortBy)

let modalRow 


let lenno
let rows
onMount(() => {

    rows = sorter(datah, sortBy, firstImage, lastImage)
    lenno = datah.length

    // let row = $state(sorter(datah, sortBy, firstImage, lastImage))

// let rows = sorter(datah, sortBy, firstImage, lastImage)
// let rows = sorter(datah, sortBy, firstImage, lastImage)
  })
  $: rows = sorter(datah, sortBy, firstImage, lastImage)




$: isFirstPage = lastImage - pageLimit == 0 ? true : false;
$: hasNextPage = lastImage >= lenno ? false: true;
// $: console.log("firstImage: ", firstImage)


$: console.log("modalOpen: ", modalOpen)

// $: console.log("shuffled: ", shuffled)
// $: console.log("rows: ", rows)
// $: console.log("sortBy: ", sortBy)
// $: console.log("firstImage: ", firstImage)
// $: console.log("lastImage: ", lastImage)
</script>


{#key modalOpen}
{#if modalOpen}
{#if containerWidth > 600}


<div id="myModal" class="fixed z-40 {modalShow} max-w-[800px] flex justify-center items-center text-center align-middle" style="background-color:#FADA7A" >

    <div class='margin-auto min-w-min' on:click={() => modalOpen = false}>
    <Bigcard {rows} {modalImage} />

    <span class="{modalShow}" on:click={() => modalOpen= false}>Close</span>
    </div>


</div>

{/if}
{/if}
{/key}


    <Radio {options} fontSize={16} legend='Sort by' bind:userSelected={sortBy}/>


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
