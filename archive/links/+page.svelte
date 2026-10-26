<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */

    import Linklist from '$lib/components/linklist.svelte'
    import SearchComponent from '$lib/components/SearchComponent.svelte'


// import * from "d3" as d3

let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);

// $inspect(innerWidth)


// function handleResize() {
//     innerWidth = window.innerWidth;
//   }

	  import Navvy from '$lib/components/nav.svelte'
    import PostList from '$lib/components/postList.svelte'

    let { data } = $props();

    // console.log(data.data[0].Url)

// // Sort data by date (newest first)
// const sortedData = $derived(
//     data.data.slice().sort((a, b) => new Date(b.Date) - new Date(a.Date))
// );


let categories = [... new Set(data.data.map(d => d.category))]
categories = categories.toSpliced(0, 0, "All")

let selectedCat = $state('All')
let searchFilteredData = $state(data.data)

let sortedData = $derived((selectedCat === 'All'
   ? searchFilteredData
   : searchFilteredData.filter(item => item.category === selectedCat))
   .slice().sort((a, b) => new Date(b.date) - new Date(a.date)));

function handleFilteredData(filtered) {
    searchFilteredData = filtered;
}


   let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3', '#A272AD']

let i = Math.floor(Math.random() * colours.length);

let colourdict = {"Tool": '#e64c5b', "Article":'#B1C29E', "Misc": '#789DBC', "Data": '#A272AD', "Vis": '#DAFA7A'}

</script>

<svelte:window bind:innerWidth />

<!-- <div class='mb-10'></div> -->



<div class='mx-auto max-w-[800px] min-h-[425px]'>

<div class="flex flex-col md:flex-row items-center justify-center gap-2">
  <!-- Search and Filter on same line -->
  <div class="flex flex-row items-center justify-center gap-2 md:gap-4">
    <SearchComponent data={data.data} onFilteredData={handleFilteredData} />

    <div class="flex items-center gap-2">
      <span>Filter:</span>
      <select
        bind:value={selectedCat}
        class="px-4 py-2 text-center bg-transparent border-2 border-black focus:outline-none focus:ring-0"
      >
        <option value="All">All</option>
        {#each Object.keys(colourdict) as cat}
          <option value={cat}>
            {cat}
          </option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Legend items -->
  <div class="flex items-center gap-2 flex-wrap justify-center">
    {#each Object.entries(colourdict) as [key, color]}
      <div class="flex items-center gap-1">
        <div
          class="w-3 h-3"
          style="background-color: {color}">
        </div>
        <span class="text-sm">{key}</span>
      </div>
    {/each}
  </div>
</div>

   {#key sortedData}
  <Linklist {sortedData} pageLimit={8} {colourdict}/>
   {/key}
  
<div class='pt-10'>This page only gets updated about once a week, when the site gets rebuilt. Still under development and highly likely to randomly break.</div>

</div>
