<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */
import Vocabcard from '$lib/components/vocabcard.svelte'

import { shuffle, descending, ascending } from 'd3-array';
import { browser } from '$app/environment';


let mobileBreakpoint = 768;
let innerWidth = $state(1000); // Default to desktop for SSR
let isMobile = $state(false);
let hasInitialized = $state(false);

let pageLimit = 4
let sortBy = $state()
sortBy = 'Random'


	  import Navvy from '$lib/components/nav.svelte'
    import PostList from '$lib/components/postList.svelte'

    let { data } = $props();



let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']

let i = Math.floor(Math.random() * colours.length);

// Language toggle state
let selected = $state('English'); // Default to English
let otherLanguage = $derived(selected === 'English' ? 'Sinhala' : 'English');

</script>

<svelte:window on:resize={() => {
  innerWidth = window.innerWidth;
  isMobile = innerWidth < mobileBreakpoint;
}} />


{#each data.data as item, i}
  <Vocabcard {item} {colours} {i} />
{/each}

{#if hasInitialized}
  {#if isMobile}
    <Navvy upDown='up'/>
  {:else}
    <div class="mb-10"></div>
  {/if}
{/if}

<!-- {#if hasInitialized}
  {#if isMobile}
    <Navvy upDown='up'/>
  {:else}
    <div class="mb-10"></div>
  {/if}
{/if} -->


<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <!-- Language Toggle Slider -->
  <div class="flex justify-center mb-8 pt-8">
    <div class="relative inline-flex items-center bg-gray-200 rounded-full p-1">
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selected === 'English' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}"
        onclick={() => selected = 'English'}
      >
        English
      </button>
      <button
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selected === 'Sinhala' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}"
        onclick={() => selected = 'Sinhala'}
      >
        Sinhala
      </button>
    </div>
  </div>





  <div class='mt-8 mb-10 text-xl pt-10'>
    <a href="/tinkering" class="text-black">Back</a>
</div>

  
</div>

