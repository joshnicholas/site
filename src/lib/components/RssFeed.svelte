<script>
    let { url, maxN = 5, filter = [] } = $props();

    let feedItems = $state([]);
    let loading = $state(false);
    let error = $state(null);

    async function fetchRssFeed() {
        if (!url) return;

        loading = true;
        error = null;

        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch RSS feed');
            }

            const data = await response.json();

            if (data.status !== 'ok') {
                throw new Error(data.message || 'RSS feed error');
            }

            let filteredItems = data.items;

            if (filter.length > 0) {
                filteredItems = data.items.filter(item => {
                    const title = item.title?.toLowerCase() || '';
                    const url = item.link?.toLowerCase() || '';
                    return !filter.some(filterTerm =>
                        title.includes(filterTerm.toLowerCase()) ||
                        url.includes(filterTerm.toLowerCase())
                    );
                });
            }

            feedItems = filteredItems.slice(0, maxN);
        } catch (err) {
            error = err.message;
            feedItems = [];
        } finally {
            loading = false;
        }
    }

    $effect(() => {
        fetchRssFeed();
    });
</script>

<div class="rss-feed">
    {#if loading}
        <p>Loading RSS feed...</p>
    {:else if error}
        <p class="error">Error: {error}</p>
    {:else if feedItems.length > 0}
        <ul class="list-disc pl-10 pb-10">
            {#each feedItems as item}
                <li class="pt-3">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p>No items found in RSS feed.</p>
    {/if}
</div>

<style>
    .rss-feed {
        font-family: inherit;
    }




    .error {
        color: #d32f2f;
        background-color: #ffebee;
        padding: 0.5rem;
        border-radius: 4px;
        border-left: 3px solid #d32f2f;
    }
</style>