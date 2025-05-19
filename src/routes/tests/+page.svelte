<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */
// import { onMount } from 'svelte';
import Imageset from '$lib/components/imageSet.svelte'

let mobileBreakpoint = 768;
let innerWidth = $state(620);
let isNotMobile = $derived(innerWidth >= mobileBreakpoint);
import { shuffle, descending, ascending } from 'd3-array';

let pageLimit = 4
// let sortBy = $state({'Random'})
let sortBy = $state()
sortBy = 'Random'

// $inspect(innerWidth)

function handleResize() {
    innerWidth = window.innerWidth;
  }

	  import Navvy from '$lib/components/nav.svelte'
    import PostList from '$lib/components/postList.svelte'

    let { data } = $props();

  let searchQuery = $state("");


  function sortUniqueStringsByFrequency(arrayOfArrays) {
    let exclusionList = ['sketch', 'study', 'quick drawing']

    const normalizedExclusionList = exclusionList.map(item => 
    item.toLowerCase().trim().replace(/'/g, '')
  );

  const flatArray = arrayOfArrays.flat();
  
  const countMap = {};
  const originalForms = {};
  
  for (const str of flatArray) {
    // Normalize the string: convert to lowercase, trim whitespace, and remove single quotes
    const normalizedStr = str.toLowerCase().trim().replace(/'/g, '');
    
    // Track the original form of the string (we'll keep the first occurrence)
    if (!originalForms[normalizedStr]) {
      originalForms[normalizedStr] = str;
    }
    
    // Count occurrences of the normalized string
    countMap[normalizedStr] = (countMap[normalizedStr] || 0) + 1;
  }
  
  // Step 3: Create an array of unique normalized strings
  const uniqueNormalizedStrings = Object.keys(countMap);
  
  // Step 4: Sort the unique strings by their frequency (count)
  uniqueNormalizedStrings.sort((a, b) => countMap[b] - countMap[a]);
  
  const filteredNormalizedStrings = uniqueNormalizedStrings.filter(normalizedStr => 
    !normalizedExclusionList.includes(normalizedStr)
  );
  
  // Step 5: Sort the unique strings by their frequency (count)
  filteredNormalizedStrings.sort((a, b) => countMap[b] - countMap[a]);
  
  // Step 6: Map back to original form strings
  return filteredNormalizedStrings.map(normalizedStr => originalForms[normalizedStr]);
}








    function filterBySearchQuery(searchQuery, allPossibleStrings, arrayOfObjects, stringPropertyName) {
  // If search query is empty, return all objects
  if (!searchQuery || searchQuery.trim() === '') {
    return arrayOfObjects;
  }
  
  // Normalize the search query
  const normalizedQuery = searchQuery.toLowerCase().trim();
  
  // Step 1: Filter the array of strings for possible matches
  const filteredStrings = allPossibleStrings.filter(str => {
    const normalizedStr = str.toLowerCase().trim();
    return normalizedStr.includes(normalizedQuery);
  });
  
  // If no matching strings found, return empty array
  if (filteredStrings.length === 0) {
    return [];
  }
  
  // Step 2: Filter the array of objects
  return arrayOfObjects.filter(obj => {
    // Get the value of the specified property
    const propertyValue = obj[stringPropertyName];
    
    // Skip objects that don't have the property or if it's not a string
    if (!propertyValue || typeof propertyValue !== 'string') {
      return false;
    }
    
    // Normalize the property value
    const normalizedPropertyValue = propertyValue.toLowerCase().trim();
    
    // Check if the property value contains any of the filtered strings
    return filteredStrings.some(filteredStr => {
      const normalizedFilteredStr = filteredStr.toLowerCase().trim();
      return normalizedPropertyValue.includes(normalizedFilteredStr);
    });
  });
}


let hashes = data.data.map(d => d['Keywords'].replace(/\[|\]/g,'').split(',').map(d => d.trim()).map(d => d.replace(/'/g, '')))
let setto = [... new Set(hashes.flat())]
// console.log("setto: ", setto)
let sorted = sortUniqueStringsByFrequency(hashes)

// $effect(() => console.log(searchQuery))


// let filteredResults  = [ ...data.data]

let filteredResults = $derived(filterPosts([...data.data], setto, searchQuery))

function filterPosts(arrayo, settoVar, searchQuery) {
    // Ensure settoVar is an array
    let insidesetto = Array.isArray(settoVar) ? [...settoVar] : [];
    
    // If search is empty, return all posts
    if (!searchQuery || typeof searchQuery !== 'string' || searchQuery.trim() === '') {
      return [...data.data];
    }
    
    // Ensure searchQuery is a string before using toLowerCase
    const normalizedSearch = (typeof searchQuery === 'string') 
      ? searchQuery.toLowerCase().trim() 
      : '';
    
    // First filter the tags that match the search
    const matchingTags = insidesetto.filter(tag => {
      // Ensure tag is a string before using includes
      if (typeof tag !== 'string') return false;
      return tag.toLowerCase().includes(normalizedSearch);
    });
    
    // If no matching tags, return empty array
    if (matchingTags.length === 0 && normalizedSearch.length > 0) {
      return [];
    } else {
      return data.data.filter(post => {
        // Skip if post content is not a string
        if (!post['Keywords'] || typeof post['Keywords'] !== 'string') return false;
        
        // Check if post contains any matching tag
        return matchingTags.some(tag => {
          if (typeof tag !== 'string') return false;
          return post['Keywords'].toLowerCase().includes(tag.toLowerCase());
        });
      });
    }
    
    // // Then filter posts that contain any of the matching tags
    // filteredResults = data.data.filter(post => {
    //   // Skip if post content is not a string
    //   if (!post['Keywords'] || typeof post['Keywords'] !== 'string') return false;
      
    //   // Check if post contains any matching tag
    //   return matchingTags.some(tag => {
    //     if (typeof tag !== 'string') return false;
    //     const hashtagVersion = `#${tag}`;
    //     return post['Keywords'].toLowerCase().includes(hashtagVersion);
    //   });
    // });
  }

  // $inspect(filteredResults)

  function sorter(array, how){
    // console.log("how: ", how)
    if (how.toLowerCase() == 'random'){
        // console.log(`${how}: `, array)
        return shuffle(array)
    } else if (how.toLowerCase() == 'oldest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return ascending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty
        // return shuffle(array)        
    } else if (how.toLowerCase() == 'newest'){
        // console.log(`:${how}`, array)
        let outty = array.sort(function(a, b) {
        return descending(dateparser(a['Date']), dateparser(b['Date']))
    })
    return outty
    
    } else if (how.toLowerCase() == 'favs'){
        
        let keep = [... new Set(feature.map(d => d))]

        return shuffle(array.filter(row => keep.includes(row['img_path'])))
    
}
}

</script>

<svelte:window bind:innerWidth />

{#if !isNotMobile}
  <Navvy upDown='up'/>
{/if}
{#if isNotMobile}
<div class="mb-10"></div>
{/if}


<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <div class='mb-6'>This page is for experiments. Right now I'm working on search.</div>

  <div class='mb-6'>I've been running scribbles through an image model to assign keywords. This is all the search bar is hooked up to. It's pretty good for things like "still life" or "green".</div>

  <div class="mb-4">
    <div class="relative">
      <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Search scribbles by key word" 
        class="w-full px-4 py-2 border border-black 2px solid; rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-[#FADA7A] text-black placeholder-black"
        />
      {#if searchQuery}
        <button 
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-black font-bold" 
          on:click={() => searchQuery = ""}>
          ✕
        </button>
      {/if}
    </div>
  </div>

  {#key filteredResults}
  {#if filteredResults.length > 0}
    <!-- <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Search Results</h2>
      <div class="space-y-2">
        {#each filteredResults as post}
          <div class="p-3 border border-gray-200 rounded-md">
            <p>{post.content}</p>
            <p class="text-sm text-gray-500">{post.date}</p>
          </div>
        {/each}
      </div>
    </div> -->
    <Imageset {pageLimit} datah={sorter(filteredResults, sortBy)} /> 
    {:else if searchQuery}
    <p class="text-gray-600 mb-6">No results found for "{searchQuery}"</p>
  {/if}  
  {/key}






  
</div>

