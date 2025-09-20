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
    
          import Navvy from '$lib/components/nav.svelte'
        // import PostList from '$lib/components/postList.svelte'
    

    </script>
    
    <svelte:window bind:innerWidth />
    

    
    
    <div class='mx-auto max-w-[800px] min-h-[425px]'>

    

    <!-- <p>I use this site to tinker and learn.</p><br> -->

    <p>Things I'm currently playing with:</p>

    <ul class='list-disc pl-10 pb-10'>
        <li class='pt-3'>Dashboard of <a href='https://joshnicholas.github.io/dash/'>Australian news top stories</a></li>
        <li class='pt-3'>Google sheet populated <a href='/links'>linklog</a></li>
        <li class='pt-3'>Filtering images <a href='/tinkering/filter'>by keyword</a></li>
        <li class='pt-3'>Filtering images <a href='/tinkering/colourmatch'>by colour</a></li>
        
    </ul>
    

    
    
    
    </div>
    
    