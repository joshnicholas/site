<!-- Pagination Component (Svelte 5) -->
<script>
  import { onMount } from 'svelte';
  import Card from '$lib/components/card.svelte'
  import IndexSlider from '$lib/components/IndexSlider.svelte'

  let { datah, pageLimit, isSortTime = false } = $props();

  let firstImage = $state(0);
  let lastImage = $state(Math.min(pageLimit, datah?.length ?? 0));
  let lenno = $state(datah?.length ?? 0);
  let rows = $state(datah ? datah.slice(0, Math.min(pageLimit, datah.length)) : []);
  let scrolly = $state();
  let scrollBottom = $state();
  let currentIndex = $state(0);

  // Split rows into 3 columns round-robin for staggered desktop layout
  const columns = $derived([
    rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 0),
    rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 1),
    rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 2),
  ]);

  // Random stagger offsets — re-roll whenever rows changes
  let columnOffsets = $state([0, 0, 0]);
  $effect(() => {
    rows; // depend on rows so it re-randomises on each page/sort change
    const max = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--column-stagger')) || 40;
    columnOffsets = [Math.random() * max, Math.random() * max, Math.random() * max];
  });

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
  const imagesPerPage = pageLimit;

  if (totalLength <= imagesPerPage) {
    // If we have pageLimit or fewer total images, show them all
    lenno = totalLength;
    rows = datah;
    firstImage = 0;
    lastImage = totalLength;
    return;
  }

  // Simple approach: start index equals currentIndex, show pageLimit consecutive images
  const startIndex = currentIndex;
  const endIndex = Math.min(currentIndex + pageLimit, totalLength);

  // If we can't show pageLimit full images from currentIndex, shift back
  const finalStartIndex = endIndex - startIndex < pageLimit ? Math.max(0, totalLength - pageLimit) : startIndex;
  const finalEndIndex = finalStartIndex + pageLimit;

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


<!-- Mobile: single column -->
<div class="container mx-auto md:hidden">
  {#each rows as row, index (row.webp_path)}
    <div class="mb-5">
      <Card {index} {row} {currentIndex} selected={currentIndex === (firstImage + index)}/>
    </div>
  {/each}
</div>

<!-- Desktop: 3 explicit staggered columns -->
<div class="container mx-auto hidden md:flex gap-[5px] items-start">
  {#each columns as col, c}
    <div class="flex-1" style="padding-top: {columnOffsets[c]}px">
      {#each col as { row, i } (row.webp_path)}
        <div class="mb-[5px]">
          <Card index={i} {row} {currentIndex} selected={currentIndex === (firstImage + i)}/>
        </div>
      {/each}
    </div>
  {/each}
</div>


<div class="container mx-auto pb-2.5">

<div class="mt-1.5 w-full flex items-center justify-between py-2.5">
  <button
    class="cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={() => {
      if (currentIndex > 0) {
        currentIndex = Math.max(currentIndex - pageLimit, 0);
        setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);
      }
    }}
    disabled={currentIndex <= 0}
  >
    Prev
  </button>

  <button
    class="cursor-pointer hover:opacity-70 select-none font-medium"
    onclick={() => {
      if (currentIndex < datah.length - 1) {
        currentIndex = Math.min(currentIndex + pageLimit, datah.length - 1);
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

  button {
    color: var(--color-ui-accent);
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

</style>