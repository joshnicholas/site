<script>
    // export let data 
    /** @type {{ data: import('./$types').PageData }} */
    
    let mobileBreakpoint = 768;
    let innerWidth = $state(620);
    let isNotMobile = $derived(innerWidth >= mobileBreakpoint);
    
    
    $inspect(innerWidth)
    
    function handleResize() {
        innerWidth = window.innerWidth;
      }
    
          import Navvy from '$lib/components/nav.svelte'
        // import PostList from '$lib/components/postList.svelte'
    

    </script>
    
    <svelte:window bind:innerWidth />
    

    
    
    <div class='mx-auto max-w-[800px] min-h-[425px]'>

    

    <p>I use this site to tinker and learn new things.</p><br>

    <p>Things I'm currently working on:</p>

    <ul class='list-disc pl-6 pb-10'>
        <li class='pt-1'>Filtering images <a href='/tinkering/filter'>by keyword</a></li>
        <li class='pt-1'>Filtering images <a href='/tinkering/colourmatch'>by colour</a></li>
    </ul>
    

    
    
    
    </div>
    
    