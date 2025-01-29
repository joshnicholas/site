<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

	  import Navvy from '$lib/components/nav.svelte'


</script>

<div class='mx-auto max-w-[800px] min-h-[600px]'>

  <Navvy upDown='up'/>

  <div class="block max-w-3xl display:block">
    <!-- class="prose w-full rounded" -->
    <div class='float-left lg:w-1/3  prose mr-0 sm:mr-2 mb-2 sm:mb-0'>
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

      <p>This site is an experiment and I'm constantly tinkering. Sorry if anything breaks while you're here.</p><br>
        
      <p>For almost 20 years you would have found a much neglected blog at this domain. The book reviews I posted in high school were truly terrible. In 2019 I <a href='https://www.theguardian.com/lifeandstyle/2022/aug/15/i-used-to-think-art-required-natural-talent-then-i-taught-myself-to-draw'>started to take drawing a bit more seriously</a> and began posting them semi-regularly.</p><br>

      <p>Eventually I got sick of seeing my scribbles spread across different platforms, and lost in chronological timelines. This new site is an attempt to bring everything together and make it more discoverable. I'll run a script to update about once a week.</p><br>

      </div>



</div>

