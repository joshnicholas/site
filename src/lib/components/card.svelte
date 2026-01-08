<script>

let { row, index, rows } = $props();

import { timeParse, timeFormat } from 'd3-time-format'
import { onMount } from 'svelte'

let showDetails = $state(false)
let currentModalIndex = $state(index)

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']
let i = Math.floor(Math.random() * colours.length)

let dateParse = timeParse("%Y-%m-%d")
let dateFormat = timeFormat("%b %Y")

function goToPrev(e) {
  e.stopPropagation()
  if (currentModalIndex > 0) {
    currentModalIndex--
  } else {
    currentModalIndex = rows.length - 1
  }
}

function goToNext(e) {
  e.stopPropagation()
  if (currentModalIndex < rows.length - 1) {
    currentModalIndex++
  } else {
    currentModalIndex = 0
  }
}

function handleKeydown(e) {
  if (!showDetails) return
  if (e.key === 'ArrowLeft') {
    goToPrev(e)
  } else if (e.key === 'ArrowRight') {
    goToNext(e)
  } else if (e.key === 'Escape') {
    showDetails = false
  }
}

$effect(() => {
  if (showDetails) {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }
})

$effect(() => {
  if (showDetails) {
    currentModalIndex = index
  }
})

</script>

<button
  type="button"
  class="border-0 p-0 bg-transparent cursor-pointer w-full block"
  onclick={() => showDetails = true}
>
  <img
    class='cardy w-full h-auto block'
    id={index}
    width={row["Width"]}
    height={row['Height']}
    style='border-color:{colours[i]};border-width:5px;border-style:solid;'
    src="/images/{row['webp_path']}"
    alt={row["Title"]}
    decoding="async"
    fetchpriority={index < 3 ? "high" : "auto"}
  />
</button>

{#if showDetails}
<div
  class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
  onclick={() => showDetails = false}
>
  <div class="relative flex flex-col items-center justify-center w-full h-full" onclick={(e) => e.stopPropagation()}>
    <button
      class="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer hover:opacity-70 z-10"
      onclick={() => showDetails = false}
    >
      ×
    </button>

    <!-- Left arrow -->
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold cursor-pointer hover:opacity-70 z-10 px-4 py-2"
      onclick={goToPrev}
    >
      ‹
    </button>

    <!-- Right arrow -->
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold cursor-pointer hover:opacity-70 z-10 px-4 py-2"
      onclick={goToNext}
    >
      ›
    </button>

    <div class="flex flex-col items-center justify-center h-full">
      <img
        class='max-w-full max-h-[calc(100vh-120px)] w-auto h-auto object-contain'
        src="/images/{rows[currentModalIndex]['webp_path']}"
        alt={rows[currentModalIndex]["Title"]}
      />
      <div class='text-center text-white modal-text mt-4 pb-4'>
        <h2 class='text-xl font-semibold mb-1'>{rows[currentModalIndex]["Title"]}</h2>
        <p class='text-sm'>{dateFormat(dateParse(rows[currentModalIndex]["Date"]))}</p>
      </div>
    </div>
  </div>
</div>
{/if}



<style>

.cardy {
    display: block;
}

.modal-text {
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
}

</style>