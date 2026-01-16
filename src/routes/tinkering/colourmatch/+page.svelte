<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);

// $inspect(innerWidth)

function handleResize() {
    innerWidth = window.innerWidth;
}

import Navvy from '$lib/components/nav.svelte';
import PostList from '$lib/components/postList.svelte';
import { LayerCake, Svg } from 'layercake';
import { scaleTime } from 'd3-scale';
import { extent } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import { onMount } from 'svelte';
import { getRandomBorderColor } from '$lib/config/colors.js'

let { data } = $props();
let borderColor = getRandomBorderColor();

// console.log(data);

let chartData = $derived(prepareChartData(data?.colourData));

onMount(() => {
    setRandomImage(data?.colourData);
});

function prepareChartData(data) {
    if (!data || !Array.isArray(data)) return [];
    
    // if (data.length > 0) {
    //     console.log("First item sample:", data[0]);
    // }
    
    return data;
}
let selectedImage = $state(null);

function setRandomImage(data) {
    if (!data || !Array.isArray(data) || data.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    
    if (randomItem && randomItem.img_path) {
        selectedImage = randomItem.img_path;
    }
}


// $inspect(chartData)
// $inspect(selectedImage)
</script>

<svelte:window bind:innerWidth />

<div class='mx-auto max-w-[800px] min-h-[425px]'>


  <div class='mb-6'>This is a timeline of all my scribbles using the five "most representative" colours in each image. If you click on a stack of colours you should get that image.</div> 
  <div class='mb-6'>I borrowed the methodology to extract colours from images <a href='https://lab.slv.vic.gov.au/resources/introduction-to-k-means-clustering'>from the State Library of Victoria</a>.</div>
    
    <div class="mb-6">I'm still tinkering with all of this so it may break.</div>

        <div class="flex justify-center mb-8 h-[300px]">
            {#if selectedImage}
                <div class="max-w-[340px] mx-auto h-full flex items-center">
                    <img 
                        src={`/images/${selectedImage}`} 
                        alt="Selected image" 
                        style="border-color:{borderColor};border-width:var(--image-border-width);border-style:solid;" 
                        class="max-w-full max-h-[300px] w-auto h-auto mx-auto"
                    />
                </div>
            {/if}
        </div>
    

    <div class="mb-8 flex justify-center">
        <div class="w-full max-w-2xl mx-auto">
            {#if chartData && chartData.length > 0}
                {@const itemWidth = 8}
                {@const containerWidth = 640}
                {@const itemsPerRow = Math.floor(containerWidth / itemWidth)}
                {@const totalRows = Math.ceil(chartData.length / itemsPerRow)}
                

                <div class="flex flex-col gap-[10px]">
                    {#each Array(totalRows) as _, rowIndex}

                        {@const isEvenRow = rowIndex % 2 === 0}
                        {@const startIdx = rowIndex * itemsPerRow}
                        {@const endIdx = Math.min((rowIndex + 1) * itemsPerRow, chartData.length)}
                        {@const rowItems = isEvenRow 
                            ? chartData.slice(startIdx, endIdx) 
                            : chartData.slice(startIdx, endIdx).reverse()}
                        
 
                        <div class="flex h-[80px] justify-center {isEvenRow ? 'flex-row' : 'flex-row-reverse'}">
                            {#each rowItems as item, colIndex}
                                <div 
                                    class="flex flex-col cursor-pointer" 
                                    style="width: {itemWidth}px;" 
                                    title={new Date(item.Date).getFullYear()}
                                >
                                    {#each item.colorKeys as key}
                                        <div 
                                            class="flex-1"
                                            style:background-color={item[key]}
                                            title={`${item[key]} - ${new Date(item.Date).getFullYear()}`}
                                            on:click={() => selectedImage = item.img_path}
                                        ></div>
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    



<div class='mt-8 mb-10 text-xl pt-10'>
    <a href="/tinkering" class="text-black">Back</a>
</div>

</div>