<!-- Pagination Component (Svelte 5) -->
<script>
  import { onMount } from 'svelte';
  import Card from '$lib/components/card.svelte'
  import IndexSlider from '$lib/components/IndexSlider.svelte'

  let { datah, pageLimit, isSortTime = false } = $props();

  let firstImage = $state(0);
  let lastImage = $state(0);
  let lenno = $state(0);
  let rows = $state([]);
  let scrolly = $state();
  let scrollBottom = $state();
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
  
  // Simple approach: start index equals currentIndex, show 4 consecutive images
  const startIndex = currentIndex;
  const endIndex = Math.min(currentIndex + 4, totalLength);
  
  // If we can't show 4 full images from currentIndex, shift back
  const finalStartIndex = endIndex - startIndex < 4 ? Math.max(0, totalLength - 4) : startIndex;
  const finalEndIndex = finalStartIndex + 4;
  
  // Debug logging
  // console.log(`currentIndex: ${currentIndex}, finalStartIndex: ${finalStartIndex}, finalEndIndex: ${finalEndIndex}`);
  
  // Update state variables
  lenno = totalLength;
  rows = datah.slice(finalStartIndex, finalEndIndex);
  firstImage = finalStartIndex;
  lastImage = finalEndIndex;
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

<IndexSlider sortedData={datah} bind:selectedIndex={currentIndex} {scrolly} />
</div>


<div class="container min-h-[900px] grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto items-center text-center">


  
  <!-- {#each rows as row, index}
    <Card {index} {row}/>
  {/each} -->

{#each rows as row, index}
  <Card {index} {row} {currentIndex} selected={currentIndex === (displayIndices.startIndex + index)}/>
{/each}


</div>


<div class="container mx-auto pb-2.5">

<div class="mt-1.5 w-full flex items-center justify-between py-2.5">
  <button
    class="text-black cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={() => {
      if (currentIndex > 0) {
        currentIndex = Math.max(currentIndex - 4, 0);
        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);
      }
    }}
    disabled={currentIndex <= 0}
  >
    Prev
  </button>

  <button
    class="text-black cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={() => {
      if (currentIndex < datah.length - 1) {
        currentIndex = Math.min(currentIndex + 4, datah.length - 1);
        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);
      }
    }}
    disabled={currentIndex >= datah.length - 1}
  >
    Next
  </button>
</div>

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

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>