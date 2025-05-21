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

let { data } = $props();

console.log(data);

// Prepare data for the chart
let chartData = $derived(prepareChartData(data?.colourData));

// Initialize with a random image on mount
onMount(() => {
    setRandomImage(data?.colourData);
});

function prepareChartData(data) {
    if (!data || !Array.isArray(data)) return [];
    
    // Debug data
    if (data.length > 0) {
        console.log("First item sample:", data[0]);
    }
    
    // Pass through data without any processing or sorting
    return data;
}

// Track selected image
let selectedImage = $state(null);

// Set a random image on page load
function setRandomImage(data) {
    if (!data || !Array.isArray(data) || data.length === 0) return;
    
    // Select a random item from the data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    
    // Set the selected image
    if (randomItem && randomItem.img_path) {
        selectedImage = randomItem.img_path;
    }
}

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']
let i = Math.floor(Math.random() * colours.length);

$inspect(chartData)
$inspect(selectedImage)
</script>

<svelte:window bind:innerWidth />

<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <div class='mb-6'>This is a timeline of all my scribbles using the five main colours in each image. It still very experimental, but if you click on a colour you should get that image.</div> 
  <div class='mb-6'>I borrowed the idea to extract colours from images <a href='https://lab.slv.vic.gov.au/resources/introduction-to-k-means-clustering'>from the State Library of Victoria</a>.</div>
    

        <!-- Display selected image -->
        {#if selectedImage}
        <div class="flex justify-center mb-8">
            <div class="max-w-[340px] mx-auto">
                <img 
                    src={`/images/${selectedImage}`} 
                    alt="Selected artwork" 
                    class="w-full h-auto rounded shadow-md" 
                />
            </div>
        </div>
    {/if}
    

    <div class="mb-8">
        <div class="w-full">
            {#if chartData && chartData.length > 0}
                <!-- Calculate how many colors per row -->
                {@const itemWidth = 10}
                {@const containerWidth = Math.min(800, innerWidth - 40)} <!-- account for padding -->
                {@const itemsPerRow = Math.floor(containerWidth / itemWidth)}
                {@const totalRows = Math.ceil(chartData.length / itemsPerRow)}
                
                <!-- Create the snake pattern with gap between rows -->
                <div class="flex flex-col gap-[10px]">
                    {#each Array(totalRows) as _, rowIndex}
                        <!-- Determine if it's an odd or even row for direction -->
                        {@const isEvenRow = rowIndex % 2 === 0}
                        {@const startIdx = rowIndex * itemsPerRow}
                        {@const endIdx = Math.min((rowIndex + 1) * itemsPerRow, chartData.length)}
                        {@const rowItems = isEvenRow 
                            ? chartData.slice(startIdx, endIdx) 
                            : chartData.slice(startIdx, endIdx).reverse()}
                        
                        <!-- Create the row with 100px height -->
                        <div class="flex h-[100px] {isEvenRow ? 'flex-row' : 'flex-row-reverse'}">
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
                            
                            <!-- Fill empty spaces on the last row -->
                            {#if rowItems.length < itemsPerRow}
                                <div style="flex: 1;"></div>
                            {/if}
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    

</div>