<script>
// import { onMount } from 'svelte';
// export let data 
/** @type {{ data: import('./$types').PageData }} */
let { data } = $props();
import { shuffle } from 'd3-array';

// import data from '$lib/scribbles.json'
// console.log('data: ', data)

import Imageset from '$lib/components/imageSet.svelte'


let pageLimit = 4

let containerWidth = $state();





let inside = shuffle(data.data.map(d => d))
// console.log('inside: ', inside)





</script>

<div id='Biggest' bind:clientWidth={containerWidth}>

        

    <Imageset {pageLimit} datah={inside} {containerWidth} /> 


</div>

<style>

    .Biggest {
        background-color: brown;
    }

    .sortRow {

    }

    form {
        margin-left: 10;
    }
</style>