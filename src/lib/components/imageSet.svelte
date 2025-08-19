<!-- Pagination Component (Svelte 5) -->
<script>
  import { onMount } from 'svelte';
  import Card from '$lib/components/card.svelte'
  import IndexSlider from '$lib/components/IndexSlider.svelte'

  let { datah, pageLimit, isSortTime = false } = $props();

  let firstImage = $state(0);
  let lastImage = $state(firstImage + pageLimit);
  let lenno = $state(0);
  let rows = $state([]);
  let scrolly = $state();
  let currentIndex = $state(0);

  // Derived values
  const isFirstPage = $derived(lastImage - pageLimit == 0);
  const hasNextPage = $derived(lastImage < lenno);
  const showPrev = $derived(isFirstPage ? "hidden" : 'visible');
  const showNext = $derived(!hasNextPage ? 'hidden' : "visible");

  // Update rows when firstImage, lastImage, or datah changes
  // $effect(() => {
  //   if (datah) {
  //     lenno = datah.length;
  //     rows = datah.slice(firstImage, lastImage);
  //   }
  // });

  onMount(() => {
    if (datah) {
      lenno = datah.length;
      rows = datah.slice(firstImage, lastImage);
    }
  });

  function handlePrevClick() {
    firstImage -= pageLimit;
    lastImage -= pageLimit;
    scrolly?.scrollIntoView(false);
  }

  function handleNextClick() {
    firstImage += pageLimit;
    lastImage += pageLimit;
    scrolly?.scrollIntoView(false);
  }


  //   $effect(() => {
  //   console.log('Index changed to:', currentIndex);
  // });


$effect(() => {
  if (!datah || typeof currentIndex !== 'number') return;
  
  const totalLength = datah.length;
  const imagesPerPage = 4;
  
  if (totalLength <= imagesPerPage) {
    // If we have 4 or fewer total images, show them all
    lenno = totalLength;
    rows = datah;
    firstImage = 0;
    lastImage = totalLength;
    return;
  }
  
  // Calculate which page the currentIndex is on
  let pageNumber = Math.floor(currentIndex / imagesPerPage);
  
  // Calculate start and end indices for this page
  let startIndex = pageNumber * imagesPerPage;
  let endIndex = startIndex + imagesPerPage;
  
  // If we're too close to the end, adjust to show the last 4 images
  if (endIndex > totalLength) {
    endIndex = totalLength;
    startIndex = totalLength - imagesPerPage;
  }
  
  // Update state variables
  lenno = totalLength;
  rows = datah.slice(startIndex, endIndex);
  firstImage = startIndex;
  lastImage = endIndex;
});

</script>

<div bind:this={scrolly}></div>

<!-- <div id='pagination' class='mx-auto flex items-center justify-between text-xl pb-5 pt-5'>
  <button 
    id='left' 
    onclick={handlePrevClick}
    style='visibility: {showPrev}'
  >
    Prev
  </button>

  <span class='text-xs font-semibold'>{lastImage}/{lenno}</span>

  <button 
    id='right' 
    onclick={handleNextClick}
    style='visibility: {showNext}'
  >
    Next
  </button>
</div> -->

<div class="container mx-auto pb-2.5">

<IndexSlider sortedData={datah} bind:selectedIndex={currentIndex} /> 
</div>


<div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center">


  
  <!-- {#each rows as row, index}
    <Card {index} {row}/>
  {/each} -->

{#each rows as row, index}
  <Card {index} {row} {currentIndex} selected={currentIndex === (displayIndices.startIndex + index)}/>
{/each}


</div>

<!-- <div id='pagination' class='mx-auto flex items-center justify-between text-xl pt-10'>
  <button 
    id='left' 
    onclick={handlePrevClick}
    style='visibility: {showPrev}'
  >
    Prev
  </button>

  <span class='text-xs font-semibold'>{lastImage}/{lenno}</span>

  <button 
    id='right' 
    onclick={handleNextClick}
    style='visibility: {showNext}'
  >
    Next
  </button>
</div> -->

<style>
/* The Modal (background) */

/* Modal Content/Box */
</style>