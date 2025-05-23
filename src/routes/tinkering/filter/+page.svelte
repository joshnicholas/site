<script>
// export let data 
/** @type {{ data: import('./$types').PageData }} */
// import { onMount } from 'svelte';
import Imageset from '$lib/components/imageSet.svelte'

import { shuffle, descending, ascending } from 'd3-array';
import { browser } from '$app/environment';
import { Filter } from 'bad-words';

// Initialize profanity filter
let profanityFilter;
$effect(() => {
  if (browser) {
    profanityFilter = new Filter();
  }
});

let mobileBreakpoint = 768;
let innerWidth = $state(1000); // Default to desktop for SSR
let isMobile = $state(false);
let hasInitialized = $state(false);

let pageLimit = 4
let sortBy = $state()
sortBy = 'Random'

// Initialize isMobile immediately on client-side
$effect(() => {
  if (browser) {
    innerWidth = window.innerWidth;
    isMobile = innerWidth < mobileBreakpoint;
    hasInitialized = true;
  }
});

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
  
  // Check for profanity if profanity filter is available
  if (browser && profanityFilter && profanityFilter.isProfane(searchQuery)) {
    // Return empty array if profanity is detected
    return [];
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
  const termMatches = {}; // Track which terms matched for each document
  
  // For each query term, add its contribution to document scores
  queryTerms.forEach(term => {
    // Find similar terms if exact match doesn't exist
    let relevantTerms = [];
    
    // Exact matches get highest priority
    if (searchIndex[term]) {
      relevantTerms.push({ term, weight: 1.0, matchType: 'exact' }); // Exact match gets full weight
    }
    
    // Only look for partial matches if we don't have exact matches
    // and the term is at least 4 characters long to avoid too many false positives
    if (relevantTerms.length === 0 && term.length >= 4) {
      // First look for terms that start with our query term (stronger signal)
      terms.forEach(indexTerm => {
        if (indexTerm !== term && indexTerm.startsWith(term)) {
          relevantTerms.push({ term: indexTerm, weight: 0.7, matchType: 'prefix' });
        }
      });
      
      // If no prefix matches, then look for substring matches with higher threshold
      if (relevantTerms.length === 0) {
        terms.forEach(indexTerm => {
          // Only consider meaningful substrings (avoid matching short terms in longer ones)
          if (indexTerm !== term && indexTerm.includes(term) && 
              // Ensure the match length is significant compared to the total length
              term.length > indexTerm.length * 0.5) {
            relevantTerms.push({ term: indexTerm, weight: 0.5, matchType: 'substring' });
          }
        });
      }
    }
    
    // If still no matches and term is at least 4 chars, find terms with similarity
    if (relevantTerms.length === 0 && term.length >= 4) {
      terms.forEach(indexTerm => {
        // Only compare terms of similar length to reduce false positives
        if (Math.abs(indexTerm.length - term.length) <= Math.max(2, term.length * 0.3)) {
          // Simple character overlap similarity
          const similarity = calculateSimilarity(term, indexTerm);
          // Higher threshold for similarity to reduce false positives
          if (similarity > 0.7) { 
            relevantTerms.push({ term: indexTerm, weight: similarity * 0.6, matchType: 'similar' });
          }
        }
      });
    }
    
    // Update scores with matching terms
    relevantTerms.forEach(({ term: matchedTerm, weight, matchType }) => {
      if (searchIndex[matchedTerm]) {
        searchIndex[matchedTerm].forEach(({ index, weight: termWeight }) => {
          scores[index] += termWeight * weight;
          
          // Track which terms matched for each document
          if (!termMatches[index]) {
            termMatches[index] = [];
          }
          termMatches[index].push({ term, matchedTerm, matchType, weight });
        });
      }
    });
  });
  
  // Create pairs of [index, score] for non-zero scores and sort by score
  let scoredIndices = scores
    .map((score, index) => ({ 
      index, 
      score, 
      matches: termMatches[index] || [],
      // Count how many unique query terms were matched
      matchedTermsCount: termMatches[index] ? 
        new Set(termMatches[index].map(m => m.term)).size : 0
    }))
    .filter(item => item.score > 0);
  
  // Only keep results that match a minimum percentage of query terms
  // This dramatically reduces false positives for multi-word queries
  const minTermCoverage = 0.5; // At least 50% of search terms must match
  if (queryTerms.length > 1) {
    scoredIndices = scoredIndices.filter(item => 
      item.matchedTermsCount / queryTerms.length >= minTermCoverage
    );
  }
  
  // Apply a minimum score threshold to reduce noise and false positives
  const minScoreThreshold = 0.05;
  scoredIndices = scoredIndices.filter(item => item.score >= minScoreThreshold);
  
  // Now sort by score
  scoredIndices.sort((a, b) => {
    // First prioritize by how many query terms were matched
    if (b.matchedTermsCount !== a.matchedTermsCount) {
      return b.matchedTermsCount - a.matchedTermsCount;
    }
    // Then by TF-IDF score
    return b.score - a.score;
  });
  
  // Map back to posts
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

// Improved character overlap similarity function with positional bias
function calculateSimilarity(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1.0;
  
  // Case insensitive comparison
  const strA = a.toLowerCase();
  const strB = b.toLowerCase();
  
  // If length difference is too great, they're probably not similar
  const maxLengthRatio = 0.7;
  const lengthRatio = Math.min(strA.length, strB.length) / Math.max(strA.length, strB.length);
  if (lengthRatio < maxLengthRatio) {
    return 0;
  }
  
  // Calculate character-level Jaccard similarity
  const aChars = new Set(strA.split(''));
  const bChars = new Set(strB.split(''));
  
  // Intersection size
  let intersection = 0;
  aChars.forEach(char => {
    if (bChars.has(char)) intersection++;
  });
  
  // Jaccard similarity: intersection / union
  const union = aChars.size + bChars.size - intersection;
  const jaccardSim = intersection / union;
  
  // Calculate positional similarity (character positions matter)
  // This helps with transpositions and common spelling errors
  let posSimilarity = 0;
  const longerStr = strA.length >= strB.length ? strA : strB;
  const shorterStr = strA.length < strB.length ? strA : strB;
  
  // Look for character bigrams that match
  let bigramMatches = 0;
  for (let i = 0; i < shorterStr.length - 1; i++) {
    const bigram = shorterStr.substring(i, i + 2);
    if (longerStr.includes(bigram)) {
      bigramMatches++;
    }
  }
  
  // Normalize by the max possible bigram matches
  const maxBigrams = shorterStr.length - 1 || 1; // Avoid division by zero
  posSimilarity = bigramMatches / maxBigrams;
  
  // Combine both similarity measures with weights
  return jaccardSim * 0.4 + posSimilarity * 0.6;
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

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']

let i = Math.floor(Math.random() * colours.length);

</script>

<svelte:window on:resize={() => {
  innerWidth = window.innerWidth;
  isMobile = innerWidth < mobileBreakpoint;
}} />

<!-- {#if hasInitialized}
  {#if isMobile}
    <Navvy upDown='up'/>
  {:else}
    <div class="mb-10"></div>
  {/if}
{/if} -->


<div class='mx-auto max-w-[800px] min-h-[425px]'>

  <!-- <div class='mb-6'>This is an experiment using multimodality and search.</div> -->

  <div class='mb-6'>I've run the scribbles through an image model to get keywords, captions and styles. This what the search bar is hooked up to.</div>
  
  <div class='mb-6'>It's pretty good for searching for things like "still life" or "green".</div>

  <div class="mb-4 flex justify-center">
    <div class="relative w-full md:w-1/2">
      <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Search for something..." 
        class="w-full px-4 py-2 rounded-none focus:outline-none focus:none bg-[#FADA7A] text-black placeholder-black"
        style="border: 4px solid {colours[i]};"
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

