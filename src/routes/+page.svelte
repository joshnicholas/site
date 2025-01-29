<script>
// import { onMount } from 'svelte';
// export let data 
/** @type {{ data: import('./$types').PageData }} */

let { data, imageDataArray } = $props();


import { setContext } from 'svelte';

import Radio from '$lib/components/radio.svelte'
import { shuffle, descending, ascending } from 'd3-array';
import { timeParse } from 'd3-time-format'

let dateparser = timeParse("%Y-%m-%d")

import Imageset from '$lib/components/imageSet.svelte'


let pageLimit = 4
// let sortBy = $state({'Random'})
let sortBy = $state()
sortBy = 'Random'

const options = ['Random', 'Newest', 'Oldest', 'Favs']

// let containerWidth = $state();

let feature = ["240711_last-full-day_0.jpg","240714_escaping-the-hu_0.jpg","240117-misty-sydney-cbd.jpg",
        "240719_pretty-sparkling-day_0.jpg","uncle_e.jpg","240425_its-getting-cold_0.jpg","240725_sending-a-whoooooole_0.jpg",
        '240711_last-full-day_0.jpg','40402_decided-to-challenge_counter.jpg','230620-escaping-the-heat.jpeg',
        '231008_streetball.jpeg','240124-sydney-ferry.jpg','purple_head.jpg',
        '230613-ipoh-french-patisserie.jpeg', '230621-penang-town-hall.jpeg',
        '230623-the-hotel.jpeg','240726_food-here-has_0.jpg','240710_had-another-crack_0.jpg'

        ]

function sorter(array, how){
    // console.log("how: ", how)
    if (how.toLowerCase() == 'random'){
        // console.log(`${how}: `, array)
        return shuffle(array)
    } else if (how.toLowerCase() == 'oldest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return ascending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty
        // return shuffle(array)        
    } else if (how.toLowerCase() == 'newest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return descending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty
    
    } else if (how.toLowerCase() == 'favs'){
        
        let keep = [... new Set(feature.map(d => d))]

        return shuffle(array.filter(row => keep.includes(row['img_path'])))
    
}
}



</script>

<!-- <div id='Biggest' bind:clientWidth={containerWidth}> -->

    <Radio {options} bind:sortBy={sortBy}/>

    {#key sortBy}
    <Imageset {pageLimit} datah={sorter(data.data, sortBy)} /> 
    {/key}


<!-- </div> -->

