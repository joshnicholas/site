<script>
    let { data, onFilteredData } = $props();

    let searchTerm = $state('');

    function calculateSimilarity(str1, str2) {
        if (!str1 || !str2) return 0;

        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        if (str1.includes(str2) || str2.includes(str1)) {
            return 1;
        }

        const words1 = str1.split(/\s+/);
        const words2 = str2.split(/\s+/);

        let matches = 0;
        for (const word2 of words2) {
            for (const word1 of words1) {
                if (word1.includes(word2) || word2.includes(word1)) {
                    matches++;
                    break;
                }
            }
        }

        return matches / Math.max(words1.length, words2.length);
    }

    function searchItems(items, term) {
        if (!term.trim()) return items;

        const scored = items.map(item => {
            const titleScore = calculateSimilarity(item.Title || '', term) * 3;
            const quoteScore = calculateSimilarity(item.Quote || '', term) * 2;
            const textScore = calculateSimilarity(item.Text || '', term) * 2;
            const categoryScore = calculateSimilarity(item.Category || '', term) * 1.5;
            const urlScore = calculateSimilarity(item.Url || '', term) * 0.5;

            const totalScore = titleScore + quoteScore + textScore + categoryScore + urlScore;

            return { ...item, searchScore: totalScore };
        }).filter(item => item.searchScore > 0.5);

        return scored.sort((a, b) => b.searchScore - a.searchScore);
    }

    $effect(() => {
        const filtered = searchItems(data, searchTerm);
        onFilteredData(filtered);
    });
</script>

<div class="flex items-center gap-2">
    <label for="search" class="text-sm font-medium">Search:</label>
    <div class="relative">
        <input
            id="search"
            type="text"
            bind:value={searchTerm}
            placeholder="Search title, quote, text, category..."
            class="px-4 py-2 pr-10 border-2 border-black focus:outline-none focus:ring-0 bg-transparent w-64 text-black placeholder-gray-500"
        />
        {#if searchTerm}
            <button
                onclick={() => searchTerm = ''}
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                aria-label="Clear search"
            >
                ×
            </button>
        {/if}
    </div>
</div>