<script>
// import { onMount } from 'svelte';
// export let data 
/** @type {{ data: import('./$types').PageData }} */

let { data, imageDataArray } = $props();

// console.log("data: ", data)

import { setContext } from 'svelte';

import Radio from '$lib/components/radio.svelte'
import { shuffle, descending, ascending } from 'd3-array';
import { timeParse } from 'd3-time-format'

let dateparser = timeParse("%Y-%m-%d")

import Imageset from '$lib/components/imageSet.svelte'


let pageLimit = 12
// let sortBy = $state({'Random'})
let sortBy = $state()
sortBy = 'Random'

// const options = ['Random', 'Newest', 'Oldest', 'Favs']
const options = ['Random', 'Date', 'Favs']

// let containerWidth = $state();


// <img class="cardy w-full h-auto block s-WkVf_r6iowHw" decoding="async" style="border-color:#789DBC;border-width:var(--image-border-width);border-style:solid;" id="0" width="340" height="453" src="/images/bafkreig6xiy7mjocxtdfwanw7k3jskg5lr7dvrmu7mykcdy7vnucgifur4.webp" alt="How's Perth, you ask #scribble" fetchpriority="high">

let removed = ["240725_sending-a-whoooooole_0.jpg",'bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.webp', 'bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.jpg',
    'bafkreihj62fpumwbo6oyegyimtwqvh42xjchanogk6v5i7r2zg2jfb3npa.jpg',
    'bafkreig6xiy7mjocxtdfwanw7k3jskg5lr7dvrmu7mykcdy7vnucgifur4.webp',
    'bafkreig6xiy7mjocxtdfwanw7k3jskg5lr7dvrmu7mykcdy7vnucgifur4.jpg'
]



let feature = ["240711_last-full-day_0.jpg","240714_escaping-the-hu_0.jpg","240117-misty-sydney-cbd.jpg",
        "240719_pretty-sparkling-day_0.jpg","uncle_e.jpg","240425_its-getting-cold_0.jpg",
        '240711_last-full-day_0.jpg','40402_decided-to-challenge_counter.jpg','230620-escaping-the-heat.jpeg',
        '231008_streetball.jpeg','240124-sydney-ferry.jpg','purple_head.jpg',
        '230613-ipoh-french-patisserie.jpeg', '230621-penang-town-hall.jpeg',
        '230623-the-hotel.jpeg','240726_food-here-has_0.jpg','240710_had-another-crack_0.jpg',
        'bafkreiebe4cdzj5eoovpgpf25yri6a3gcbe3pz4bepvd6ibquy22ihyb2u.jpg','bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.jpg',
        'bafkreiamgekie2fpvpehuynwfaic3ck5jbvnubebls37gmivgnrcew2mdu.jpg','bafkreib64zsamf3z2s23bmrigo457riaqgpzj7zvihwbwjl5yvftljo6zq.jpg',
        'bafkreicmocizke57lx7km6s3jgq22bzyuwsnaplbqrsa5crgdykctmxeza.jpg',
        'bafkreictzaz4oeshhzwuyzbz55qtieuopnatijpqbknebn5nfsycyxaqry.jpg','bafkreickngshyrlldojxnacpksidqihsmb4misoyecwauwpeckjttml6zi.jpg',
        'bafkreidcm772nxcggw75zkao4rvgdyg5s4or3227ijbkqv3utlt4a7fkqy.jpg','bafkreidpxkyafq2q37ae66tumqdgyiymzxyipsk2amrq4gx2jphdg7ti5i.jpg',
        'bafkreig7mwkri7cii4lsf2d7b5y45ricnpyqsleun2p4tbjs3zwpxs6j7a.jpg','bafkreihhzksklqyyz5dh444fwwuvbm5shpaaqyma7tszc43e4ji4jcgbiu.jpg',
        'bafkreifjqcy2tfifsiasvvfp5ti5mvdjiueuvov247xnbi5bkkc6abupwa.jpg'

        ]

// Filter out removed images first
let filteredData = $derived(data.data.filter(item => !removed.includes(item.img_path)))

function sorter(array, how){
    // console.log("how: ", how)
    if (how.toLowerCase() == 'random'){
        // console.log(`${how}: `, array)
        return shuffle(array)
    } 

    else if (how.toLowerCase() == 'date'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return descending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty
        // return shuffle(array)        
    } 
    
    // else if (how.toLowerCase() == 'oldest'){
    //     // console.log(`:${how}`, array)
    //     let outty = array.sort(function(a, b) {
    //     return ascending(dateparser(a['Date']), dateparser(b['Date']))
    // })
    // return outty
    //     // return shuffle(array)        
    // } 
    
    // else if (how.toLowerCase() == 'newest'){
    //     // console.log(`:${how}`, array)
    //     let outty = array.sort(function(a, b) {
    //     return descending(dateparser(a['Date']), dateparser(b['Date']))
    // })
    // return outty
    
    // } 
    
    
    else if (how.toLowerCase() == 'favs'){
        
        let keep = [... new Set(feature.map(d => d))]
        // console.log("keep: ", keep)

        return shuffle(array.filter(row => keep.includes(row['img_path'])))
    
}
}



</script>

<!-- <div id='Biggest' bind:clientWidth={containerWidth}> -->

<div class="container mx-auto">
    <Radio {options} bind:sortBy={sortBy}/>
</div>
    {#key sortBy}
    <Imageset {pageLimit} datah={sorter(filteredData, sortBy)} />
    {/key}


<!-- </div> -->

