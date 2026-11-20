<script>
// export let data
/** @type {{ data: import('./$types').PageData }} */

// import RssFeed from '$lib/components/RssFeed.svelte'

// let rssFeedLoading = $state(true);
let borderColor = '#FFCBAD'
let backgroundColor = '#4E5E6E'
let linkColor = '#FFCBAD'
let videoBorderColor = '#FFCBAD'
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

<svelte:head>
  {@html `<style>body { background-color: ${backgroundColor} !important; --color-link: ${linkColor}; --color-ui-accent: ${linkColor}; --image-border-color: ${linkColor}; }</style>`}
</svelte:head>

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

      <!-- <img alt='about image' src="/blueyellow200.jpg" srcset="/blueyellow200.jpg 200w, /blueyellow340.jpg 380w" sizes="(max-width: 600px) 190px,
         190px" width="190" height="273" class="mx-auto mb-2.5" style='border-color:{borderColor};border-width:var(--image-border-width);border-style:solid;'/> -->

          <video src="/videos/profile.mp4" width="480" height="480" class="mx-auto mb-2.5 about-video"
  style='border-color:{videoBorderColor};border-width:var(--video-border-width, var(--image-border-width));border-style:solid;' autoplay
  muted loop playsinline></video>

    </div>

  </div>

  
    <div class=''>

      <p class='mt-2.5'>Ello.</p><br>
      <!-- , <a href='https://joshnicholas.com/projects'>projects</a> I'm working on -->
      <p>My name is <span class="font-semibold">Josh</span>. I'm a scribbler and <a href='https://www.abc.net.au/news/josh-nicholas/107294250' target='_blank' rel="me">journalist</a>.</p><br>

      <p>This is a loose collection of apps and things will randomly break.</p><br>

      <!-- <p>I also use this site to <a href='https://joshnicholas.com/tinkering'>tinker</a> and learn new things. Things may randomly break.</p><br> -->
              
      <ul class='list-disc list-inside mb-5'>
      <li><a href="https://links.joshnicholas.com/rss" rel="me">links rss</a></li>
      <li><a rel='me' href="https://joshnicholas.blog/feed">blog rss</a></li>
      </ul>


      <!-- <p><a href='https://www.instagram.com/joshcnicholas' target='_blank' rel="me">Insta</a>.</p>  -->


<div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div>


    <p>Recent projects:</p>

    <ul class='list-disc pl-10 pb-10'>
        
      <li class='pt-3'><a href='https://joshnicholas.github.io/drawing_values_checker/'>Value checker</a> for drawing/painting</li>
      <li class='pt-3'>Wynne prize finalist <a href='https://wynne-two.vercel.app/'>gallery</a></li>  
      <li class='pt-3'>2025 Audio advent <a href='https://audio-advent.vercel.app/'>calendar</a></li>      
      <li class='pt-3'>Four day workweek <a href='https://joshnicholas.github.io/four-day-calculator/'>calculator</a></li>
        <li class='pt-3'>Melbourne <a href='https://joshnicholas.github.io/oz_weather_scraper/'>weather dashboard</a></li>
        <li class='pt-3'>Dashboard of <a href='https://joshnicholas.github.io/dash/'>Australian news top stories</a></li>
        <!-- <li class='pt-3'>Google sheet populated <a href='/links'>linklog</a></li> -->

    </ul>

      </div>

      <!-- {#if !rssFeedLoading}<p>Some recent stories:</p>{/if}
  <RssFeed url='https://www.theguardian.com/profile/josh-nicholas/rss' maxN={5} filter={['The Crunch:', 'australia-politics-live']} bind:loading={rssFeedLoading}/>      


      <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div> -->

      <!-- <hr class='mb-5' style='border-color:#000 !important;width:50%'>

      <div>
        <PostList datah={data.items} pageLimit={6} title={"Recent articles:"}/>
      </div> -->


</div>

<style>
  @media (max-width: 767px) {
    .about-video {
      --video-border-width: 6px;
    }
  }
</style>

