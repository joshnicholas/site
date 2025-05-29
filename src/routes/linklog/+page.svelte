<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

// import * from "d3" as d3

let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);


// $inspect(innerWidth)

function getBaseUrl(url) {
  try {
    const urlObj = new URL(url);
    let hostname = urlObj.hostname;

    if (hostname.startsWith('www.')) {
      hostname = hostname.substring(4);
    }
    
    const parts = hostname.split('.');
    if (parts.length >= 2) {
      return parts.slice(-2).join('.');
    }
    
    return hostname;
  } catch (error) {
    console.error('Invalid URL:', error);
    return null;
  }
}

// function handleResize() {
//     innerWidth = window.innerWidth;
//   }

	  import Navvy from '$lib/components/nav.svelte'
    import PostList from '$lib/components/postList.svelte'

    let { data } = $props();

// Sort data by date (newest first)
const sortedData = $derived(
    data.data.slice().sort((a, b) => new Date(b.Date) - new Date(a.Date))
);


// console.log(sortedData)


  function fixDate(thingo){

    const date = new Date(thingo);
    
    return `${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`;

  }




</script>

<svelte:window bind:innerWidth />

<!-- <div class='mb-10'></div> -->

<div class='mx-auto max-w-[800px] min-h-[425px]'>
    {#each sortedData as item}
        <div class='pt-6 [&:not(:last-child)]:border-b border-black pb-6 max-w-[600px] mx-auto'>
            {#if item.Quote}
                <blockquote class='text-lg italic mb-4 border-l-4 border-black pl-4'>
                    "{item.Quote}"
                </blockquote>
            {/if}
            
            {#if item.Text}
                <p class='mb-4'>
                    {item.Text}
                </p>
            {/if}
            <a href='{item.URL}' target='_blank'>{getBaseUrl(item.URL)}</a>
            <p class='text-xs italic'> {fixDate(item.Date)}</p>
        </div>
    {/each}

  
<div class='pt-10'>This is an experiment in publishing from a <a href='https://docs.google.com/spreadsheets/d/10-Z3-zH1OVf8JQdKqB3GnKEIropYv1AT9-Mm8h536K8/edit?gid=0#gid=0' target='_blank'>Google sheet</a>. This feed currently only gets updated when I update the entire site. I'm working on an rss version.</div>
</div>

