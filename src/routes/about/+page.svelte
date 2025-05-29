<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);


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

      <img alt='about image'  srcset="/blueyellow200.jpg 200w, /blueyellow340.jpg 380w" sizes="(max-width: 600px) 380px,
         380px" class="mx-auto" style='border-color:#DC5F00;border-width: 10px;'/>

    </div>

  </div>

  
    <div class=''>

      <br>
      <br>

      <p class=''>Ello.</p><br>
      <!-- , <a href='https://joshnicholas.com/projects'>projects</a> I'm working on -->
      <p>My name is <span class="font-semibold">Josh</span>. I'm a scribbler and <a href='https://www.theguardian.com/profile/josh-nicholas' target='_blank' rel="me">journalist</a>.</p><br>

      <p>There used to be a much-neglected blog at this site. It's now where I gather <a href='https://www.theguardian.com/lifeandstyle/2022/aug/15/i-used-to-think-art-required-natural-talent-then-i-taught-myself-to-draw'>my scribbles</a> from various platforms.</p><br>

      <p>I also use this site to tinker and learn new things. Its in a constant state of flux and things may randomly break.</p><br>
              
      <p>I'm aiming to run an update script about once a week. I post more regularly on <a href='https://www.instagram.com/joshcnicholas' target='_blank' rel="me">Instagram</a>.</p><br>

      </div>


      <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div>

      <!-- <hr class='mb-5' style='border-color:#000 !important;width:50%'>

      <div>
        <PostList datah={data.items} pageLimit={6} title={"Recent articles:"}/>
      </div> -->


</div>

