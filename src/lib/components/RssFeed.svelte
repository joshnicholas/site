<script>
    let { url, maxN = 5, filter = [], loading = $bindable(true) } = $props();

    let feedItems = $state([]);
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
    {#if feedItems.length > 0}
        <ul class="list-disc pl-10 pb-10">
            {#each feedItems as item}
                <li class="pt-3">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .rss-feed {
        font-family: inherit;
        min-height: 220px;
    }
</style>