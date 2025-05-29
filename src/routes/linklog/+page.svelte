<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

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

function handleResize() {
    innerWidth = window.innerWidth;
  }

	  import Navvy from '$lib/components/nav.svelte'
    import PostList from '$lib/components/postList.svelte'

    let { data } = $props();

// Sort data by date (newest first)
const sortedData = $derived(
    data.data.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
);





  function fixDate(thingo){

    const date = new Date(thingo);
    
    return `${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`;

  }




</script>

<svelte:window bind:innerWidth />

<div class='mb-10'></div>

<div class='mx-auto max-w-[800px] min-h-[425px]'>
    {#each sortedData as item}
        <div class='mb-8 [&:not(:last-child)]:border-b border-black pb-6'>
            {#if item.Quote}
                <blockquote class='text-lg italic mb-4 border-l-4 border-black pl-4'>
                    {item.Quote}
                </blockquote>
            {/if}
            
            {#if item.Text}
                <p class='mb-4'>
                    {item.Text}
                </p>
            {/if}
            <a href='{item.URL}' target='_blank'>{getBaseUrl(item.URL)}</a>
            <p class='text-xs'>Added: {fixDate(item.Date)}</p>
        </div>
    {/each}
</div>

