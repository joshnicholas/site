<script>
    import IndexSlider from '$lib/components/IndexSlider.svelte';

    let { sortedData, pageLimit, colourdict } = $props();

    // console.log('SortedData: ', sortedData)
    console.log(Object.keys(sortedData[0]))

    // Start at index 0, showing first 9 items
    let selectedIndex = $state(0);

    let formattedDate = $state('')
$effect(() => {
    if (sortedData && sortedData[selectedIndex]) {
        const dateObj = new Date(sortedData[selectedIndex].Date);
        formattedDate = dateObj.toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });
        // console.log(formattedDate);
    }
});
    // Always show 9 items starting from selectedIndex
    let rows = $derived(sortedData.slice(selectedIndex, selectedIndex + 9));

    function getBaseUrl(url) {
        try {
            const urlObj = new URL(url);
            let hostname = urlObj.hostname;
            if (hostname.startsWith('www.')) {
                hostname = hostname.substring(4);
            }
            const parts = hostname.split('.');
            if (parts.length <= 2) {
                return hostname;
            }
            const lastPart = parts[parts.length - 1];
            const secondLastPart = parts[parts.length - 2];
            const genericTlds = ['com', 'co', 'org', 'net', 'edu', 'gov', 'mil', 'int'];
            if (lastPart.length === 2 && genericTlds.includes(secondLastPart)) {
                return parts.slice(-3).join('.');
            }
            return parts.slice(-2).join('.');
        } catch (error) {
            console.error('Invalid URL:', error);
            return null;
        }
    }

    function colouriser(category) {
        return colourdict[category] || '#007cc9';
    }

    let scrolly;
</script>

<div bind:this={scrolly}></div>

<div class="min-h-[600px] container gap-6 mx-auto items-center text-center">
    <IndexSlider 
        {sortedData} 
        bind:selectedIndex 
        increment={1}
        {scrolly} 
    />

    <div class="text-center pb-5">
    <span class="text-lg font-medium">{formattedDate}</span>
    </div>

    <ul class="max-w-[800px] mx-auto space-y-2 list-none">
        {#each rows as item}
            <li class="relative pl-6 text-left">
                <div 
                    class="absolute left-0 top-2 w-3 h-3 rounded-full" 
                    style="background-color: {colouriser(item.Category)}">
                </div>
                
                {#if item.Title}
                    <a href='{item.Url}' target='_blank' class='font-bold text-black'>
                        {item.Title}
                    </a>
                {/if}

                {#if item.Quote && item.Title}
                    <span> - </span>
                {/if}

                {#if item.Quote}
                    <span class='italic quote-fade tooltip-container' title='"{item.Quote}"'>
                        "{item.Quote}"
                    </span>
                {/if}
                
                {#if item.Text}
                    <span>
                        {item.Text}
                    </span>
                {/if}
                
                <span> - </span>
                <span>
                    <a href='{item.Url}' target='_blank'>{getBaseUrl(item.Url)}</a>
                </span>
            </li>
        {/each}
    </ul>
</div>

<style>
    .quote-fade {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
        position: relative;
        cursor: help;
    }
    
    .quote-fade::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 100%;
        background: linear-gradient(to right, transparent, #FADA7A);
        pointer-events: none;
    }
</style>