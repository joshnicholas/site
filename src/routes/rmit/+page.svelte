<script>
// export let data
/** @type {{ data: import('./$types').PageData }} */

import RssFeed from '$lib/components/RssFeed.svelte'

let rssFeedLoading = $state(true);
let borderColor = '#FF8C68'
let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);

$effect(() => {
  const originalBg = document.body.style.backgroundColor;
  // document.body.style.backgroundColor = '#70CBFF'; 

  return () => {
    document.body.style.backgroundColor = originalBg;
  };
});


// $inspect(innerWidth)

// function handleResize() {
//     innerWidth = window.innerWidth;
//   }

	  // import Navvy from '$lib/components/nav.svelte'
    // import PostList from '$lib/components/postList.svelte'

    // let { data } = $props();

    // console.log("items: ", data.items)

    // console.log("data: ", data)

    // console.log("Hi!")
</script>

<svelte:window bind:innerWidth />

<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <!-- {#if !isNotMobile}
  <Navvy upDown='up'/>
{/if}
{#if isNotMobile}
<div class="mb-10"></div>
{/if} -->


  <div class="block max-w-3xl display:block">
    <!-- class="prose w-full rounded" -->
    <div class='float-left lg:w-1/3  prose mr-0 sm:mr-2 mb-1 sm:mb-0'>
    <!-- <img alt='about image' src='/about.png' class="max-w-50px rounded"/> -->
      <!-- <img alt='about image' src='/new_about.jpg' class="max-h-[15rem] text-wrap  mx-auto rounded sm:rounded-2xl"/> -->
      <!-- <img alt='about image' src='/yellow.jpg' class=" md:max-h-[25rem] mx-auto rounded rounded-2xl"/> -->

      <!-- <img alt='about image'  srcset="/blueyellow200.jpg 200w, /blueyellow340.jpg 380w" sizes="(max-width: 600px) 380px,
         380px" class="mx-auto mb-2.5" style='border-color:{borderColor};border-width:var(--image-border-width);border-style:solid;'/> -->

    </div>

  </div>

  




<div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div>

<ul>

  <li>
<a target='blank' href="https://docs.google.com/presentation/d/1EPw2tJB27Yy8dOVFkvF1w3FNsjzTzY4VIpPUYxtuuzQ/edit?usp=sharing">Presso</a>
  </li>
    <li>
<a target='blank' href="https://github.com/joshnicholas/rmit-data-journalism/tree/main/1_datawrapper_flourish">Github</a>
  </li>
    <li>
<a target='blank' href="https://ourworldindata.org/population-growth">OWID Population</a>
  </li>
    <li>
<a target='blank' href="https://www.theguardian.com/news/ng-interactive/2025/jun/19/north-west-shelf-project-greenhouse-gas-emissions-burrup-peninsula-western-australia">Emissions</a>
  </li>
    <li>
<a target='blank' href="https://www.abc.net.au/news/2026-04-02/the-artemis-ii-mission-to-the-moon/106300532">Artemis</a>
  </li>
      <li>
<a target='blank' href="https://www.datawrapper.de/blog/data-vis-dispatch-august-11-2026-solar-eclipses-chatgpt-and-ticks">Datavis dispatch</a>
  </li>

  

</ul>

</div>

<style>
  ul {
    list-style: none;
    padding-left: 0;
  }

  ul li {
    padding-left: 1.2em;
    position: relative;
  }

  ul li::before {
    content: "–";
    color: var(--color-link);
    position: absolute;
    left: 0;
  }
</style>

