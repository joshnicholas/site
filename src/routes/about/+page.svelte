<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

import RssFeed from '$lib/components/RssFeed.svelte'

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
         380px" class="mx-auto mb-2.5" style='border-color:#DC5F00;border-width: 10px;'/>

    </div>

  </div>

  
    <div class=''>

      <br>
      <br>

      <p class='mt-2.5'>Ello.</p><br>
      <!-- , <a href='https://joshnicholas.com/projects'>projects</a> I'm working on -->
      <p>My name is <span class="font-semibold">Josh</span>. I'm a scribbler and <a href='https://www.theguardian.com/profile/josh-nicholas' target='_blank' rel="me">journalist</a>.</p><br>

      <p>This is a collection of apps, including a <a href='http://joshnicholas.blog/' rel='me'>blog</a> and a collection of <a href='https://joshnicholas.com/' rel='me'>scribbles</a>. It's all a big experiment so things will randomly break.</p><br>

      <!-- <p>I also use this site to <a href='https://joshnicholas.com/tinkering'>tinker</a> and learn new things. Things may randomly break.</p><br> -->
              
      <p>I'm aiming to run an update script about once a week. I post more regularly on <a href='https://www.instagram.com/joshcnicholas' target='_blank' rel="me">insta</a>. You can follow my posts using rss <a href='https://joshnicholas.blog/feed'>here</a>.<br></p> 


<div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div>

<br>
    <p>Some current projects:</p>

    <ul class='list-disc pl-10 pb-10'>
        
      <li class='pt-3'>2025 Audio advent calendar<a href='https://audio-advent.vercel.app/'>calculator</a></li>      
      <li class='pt-3'>Four day workweek <a href='https://joshnicholas.github.io/four-day-calculator/'>calculator</a></li>
        <li class='pt-3'>Melbourne <a href='https://joshnicholas.github.io/oz_weather_scraper/'>weather</a></li>
        <li class='pt-3'>Dashboard of <a href='https://joshnicholas.github.io/dash/'>Australian news top stories</a></li>
        <!-- <li class='pt-3'>Google sheet populated <a href='/links'>linklog</a></li> -->
        <li class='pt-3'>Filtering images <a href='/tinkering/filter'>by keyword</a></li>
        <li class='pt-3'>Filtering images <a href='/tinkering/colourmatch'>by colour</a></li>
        
    </ul>

      </div>

      <p>Some recent stories:</p>
  <RssFeed url='https://www.theguardian.com/profile/josh-nicholas/rss' maxN={5} filter={['The Crunch:', 'australia-politics-live']}/>      


      <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div>

      <!-- <hr class='mb-5' style='border-color:#000 !important;width:50%'>

      <div>
        <PostList datah={data.items} pageLimit={6} title={"Recent articles:"}/>
      </div> -->


</div>

