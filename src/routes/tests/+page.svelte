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
// let sorted = sortUniqueStringsByFrequency(hashes)

// $effect(() => console.log(searchQuery))


// let filteredResults  = [ ...data.data]

// TF-IDF search variables
let postVectors = $state([]);
let corpus = $state([]);
let terms = $state([]);
let idfValues = $state({});
let searchIndex = $state({});
let searchIndexReady = $state(false);

// Precompute the search index when component mounts
function prepareSearchIndex(posts) {
  // Properties to include in the search index
  const propertiesToSearch = ['Keywords', 'Caption', 'Subject', 'Style', 'Colours'];
  
  // Extract all searchable text from each post
  const newCorpus = posts.map(post => {
    return propertiesToSearch
      .map(prop => post[prop] || '')
      .join(' ')
      .toLowerCase()
      .replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .replace(/\s{2,}/g, ' ');
  });
  
  // Create document frequency map
  const documentFrequency = {};
  
  // Extract unique terms from all documents
  const allWords = new Set();
  const documentTerms = newCorpus.map(text => {
    // Split into words and filter out short words
    const words = text.split(/\s+/).filter(word => word.length > 2);
    const uniqueWords = [...new Set(words)];
    
    // Add to global term set
    uniqueWords.forEach(word => allWords.add(word));
    
    // Count document frequency
    uniqueWords.forEach(word => {
      documentFrequency[word] = (documentFrequency[word] || 0) + 1;
    });
    
    return words;
  });
  
  // Convert set to array
  const newTerms = [...allWords];
  
  // Calculate IDF for each term
  const numDocuments = newCorpus.length;
  const newIdfValues = {};
  newTerms.forEach(term => {
    // Use smoothed IDF to handle terms that appear in all documents
    newIdfValues[term] = Math.log((numDocuments + 1) / (documentFrequency[term] + 1)) + 1;
  });
  
  // Create TF-IDF vector for each document
  const newPostVectors = documentTerms.map((docTerms, docIndex) => {
    const vector = {};
    const wordCount = docTerms.length;
    
    // Count term frequencies
    const termFrequency = {};
    docTerms.forEach(term => {
      termFrequency[term] = (termFrequency[term] || 0) + 1;
    });
    
    // Calculate TF-IDF for each term
    Object.keys(termFrequency).forEach(term => {
      const tf = termFrequency[term] / wordCount;
      vector[term] = tf * newIdfValues[term];
    });
    
    return vector;
  });
  
  // Create an inverted index for faster search
  const newSearchIndex = {};
  newTerms.forEach(term => {
    newSearchIndex[term] = [];
    newPostVectors.forEach((vector, postIndex) => {
      if (vector[term]) {
        newSearchIndex[term].push({
          index: postIndex,
          weight: vector[term]
        });
      }
    });
  });
  
  // Update state variables
  corpus = newCorpus;
  terms = newTerms;
  idfValues = newIdfValues;
  postVectors = newPostVectors;
  searchIndex = newSearchIndex;
  searchIndexReady = true;
}

// Initialize search index
$effect(() => {
  if (data && data.data && data.data.length > 0) {
    prepareSearchIndex(data.data);
  }
});

let filteredResults = $derived(filterPosts([...data.data], setto, searchQuery, searchIndexReady))

function filterPosts(arrayo, settoVar, searchQuery, indexReady) {
  // If search is empty or index isn't ready, return all posts
  if (!searchQuery || typeof searchQuery !== 'string' || searchQuery.trim() === '' || !indexReady) {
    return [...data.data];
  }
  
  // Normalize and split the search query into terms
  const normalizedSearch = searchQuery.toLowerCase().trim();
  const queryTerms = normalizedSearch
    .replace(/[\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
  
  // If no valid terms, return empty results
  if (queryTerms.length === 0) {
    // Fall back to substring search if query is too short
    if (normalizedSearch.length >= 2) {
      return simpleSubstringSearch(normalizedSearch);
    }
    return [];
  }
  
  // Calculate scores for each post
  const scores = new Array(data.data.length).fill(0);
  
  // For each query term, add its contribution to document scores
  queryTerms.forEach(term => {
    // Find similar terms if exact match doesn't exist
    let relevantTerms = [];
    
    if (searchIndex[term]) {
      relevantTerms.push({ term, weight: 1.0 }); // Exact match gets full weight
    }
    
    // Add partial matches (terms that contain the query term)
    terms.forEach(indexTerm => {
      if (indexTerm !== term && indexTerm.includes(term)) {
        relevantTerms.push({ term: indexTerm, weight: 0.8 }); // Partial match gets 0.8 weight
      }
    });
    
    // If still no matches, find terms with low edit distance
    if (relevantTerms.length === 0) {
      terms.forEach(indexTerm => {
        // Simple character overlap similarity
        const similarity = calculateSimilarity(term, indexTerm);
        if (similarity > 0.6) { // Threshold for similarity
          relevantTerms.push({ term: indexTerm, weight: similarity });
        }
      });
    }
    
    // Update scores with matching terms
    relevantTerms.forEach(({ term: matchedTerm, weight }) => {
      if (searchIndex[matchedTerm]) {
        searchIndex[matchedTerm].forEach(({ index, weight: termWeight }) => {
          scores[index] += termWeight * weight;
        });
      }
    });
  });
  
  // Create pairs of [index, score] for non-zero scores and sort by score
  const scoredIndices = scores
    .map((score, index) => ({ index, score }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
  
  // Map back to posts, using the original order as a tiebreaker for stable sorting
  return scoredIndices.map(item => data.data[item.index]);
}

// Simple substring search as fallback for very short queries
function simpleSubstringSearch(query) {
  // Properties to search in
  const propertiesToSearch = ['Keywords', 'Caption', 'Subject', 'Style', 'Colours'];
  
  // Filter posts that contain the search query in any of the specified properties
  return data.data.filter(post => {
    return propertiesToSearch.some(property => {
      // Skip if property does not exist or is not a string
      if (!post[property] || typeof post[property] !== 'string') {
        return false;
      }
      
      // Check if the property value contains the search query
      return post[property].toLowerCase().includes(query);
    });
  });
}

// Simple character overlap similarity function
function calculateSimilarity(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1.0;
  
  const aChars = new Set(a.split(''));
  const bChars = new Set(b.split(''));
  
  // Intersection size
  let intersection = 0;
  aChars.forEach(char => {
    if (bChars.has(char)) intersection++;
  });
  
  // Jaccard similarity: intersection / union
  const union = aChars.size + bChars.size - intersection;
  return intersection / union;
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

// console.log("Objecto: ", Object.keys(data.data[0]))
// ['Date', 'Title', 'img_path', 'Caption', 'Colours', 'Style', 'Subject', 'Keywords', 'Category', 'img_alt', 'Width', 'Height']

// $inspect(filteredResults)



</script>

<svelte:window bind:innerWidth />

{#if !isNotMobile}
  <Navvy upDown='up'/>
{/if}
{#if isNotMobile}
<div class="mb-10"></div>
{/if}


<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <!-- <div class='mb-6'>This is an experiment using multimodality and search.</div> -->

  <div class='mb-6'>I've run the scribbles through an image model to get keywords, captions and styles. This what the search bar is hooked up to. It's pretty good for things like "still life" or "green". "Ball" will return both "ball" and "balloon".</div>

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

