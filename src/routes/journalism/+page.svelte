<script>
	import MiniSearch from 'minisearch';
	import { journoSearchOptions, journoQueryOptions } from '$lib/journoSearchOptions.js';
	import Radio from '$lib/components/radio.svelte';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	// URLs of the articles to show by default when "Select" is chosen.
	const selectedLinks = [
		'https://www.theguardian.com/australia-news/2025/mar/22/tourists-watercolours-and-the-sad-still-star-sketching-the-route-35-tram-showed-me-a-melbourne-i-had-never-really-noticed',
		'https://www.theguardian.com/news/datablog/2022/may/19/reality-cheque-we-taught-ai-artificial-intelligence-to-spot-the-most-used-props-australian-federal-election-2022',
		'https://www.theguardian.com/australia-news/ng-interactive/2021/may/17/who-owns-australia',
		'https://www.theguardian.com/news/ng-interactive/2024/apr/18/as-190000-households-wait-for-social-housing-application-numbers-are-only-increasing',
		'https://www.theguardian.com/news/ng-interactive/2025/jun/19/north-west-shelf-project-greenhouse-gas-emissions-burrup-peninsula-western-australia',
		'https://www.theguardian.com/environment/2025/sep/27/make-your-own-origami-bird-simple-guide-australian-bird-of-the-year-2025',
		'https://www.theguardian.com/sport/2023/jan/04/silly-point-or-square-leg-how-well-do-you-know-your-way-around-a-cricket-field',
		'https://www.theguardian.com/artanddesign/2026/jan/04/helen-wilding-artist-sketching-whole-melbourne-brunswick-street',
		'https://www.theguardian.com/news/ng-interactive/2024/jul/17/quiz-whats-getting-better-for-australians-today-and-whats-getting-worse',
		'https://www.theguardian.com/news/ng-interactive/2026/jun/08/australian-music-extinction-risk-data-listening-trends-aria-chart-history'
	];

	const viewOptions = ['Select', 'All'];
	let viewMode = $state('Select');

	$effect(() => {
		viewMode;
		page = 0;
	});

	let searchTerm = $state('');
	let page = $state(0);
	const pageSize = 10;

	let searching = $state(false);
	let searchResults = $state(null); 
	let indexPromise = null;

	function loadIndex() {
		if (!indexPromise) {
			indexPromise = import('$lib/data/journo-index.json').then((mod) =>
				MiniSearch.loadJS(mod.default, journoSearchOptions)
			);
		}
		return indexPromise;
	}

	$effect(() => {
		const term = searchTerm.trim();
		page = 0;

		if (!term) {
			searching = false;
			searchResults = null;
			return;
		}

		viewMode = 'All';

		let cancelled = false;
		searching = true;
		loadIndex().then((index) => {
			if (cancelled) return;
			searchResults = index.search(term, journoQueryOptions);
			searching = false;
		});

		return () => {
			cancelled = true;
		};
	});

	let selectedRows = $derived(
		selectedLinks.map((url) => data.data.find((row) => row.url === url)).filter(Boolean)
	);

	let rows = $derived(
		(searchResults ?? (viewMode === 'All' ? data.data : selectedRows))
			.slice()
			.sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
	);
	let pageCount = $derived(Math.max(1, Math.ceil(rows.length / pageSize)));
	let paged = $derived(rows.slice(page * pageSize, page * pageSize + pageSize));

	function formatDate(dateString) {
		if (!dateString) return '';
		const d = new Date(dateString);
		if (isNaN(d)) return dateString;
		return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>Journalism | Josh Nicholas</title>
	<meta name="description" content="My journalism" />
</svelte:head>

<div>
	<!-- <h1 class="text-2xl font-bold text-center mb-6">Journalism</h1> -->

	<Radio options={viewOptions} bind:sortBy={viewMode} />

	<div class="mb-10 mt-10 relative w-3/4 mx-auto">
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search headline, tags, article text..."
			class="w-full px-4 py-2 pr-8 bg-transparent text-[color:var(--color-text)] placeholder-[color:var(--color-text)] focus:outline-none"
			style="border-bottom: 2px solid var(--color-ui-accent);"
		/>
		{#if searchTerm}
			<button
				type="button"
				aria-label="Clear search"
				class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 select-none"
				style="color: #baa9d4;"
				onclick={() => (searchTerm = '')}
			>
				&times;
			</button>
		{/if}
	</div>

	<div class="overflow-x-auto">
		<table class="w-full text-left border-collapse">
			<thead>
				<!-- <tr style="border-bottom: 2px solid var(--color-ui-accent);">
					<th class="px-3 py-2">Headline</th>
					<th class="px-3 py-2 whitespace-nowrap">Published</th>
				</tr> -->
			</thead>
			<tbody>
				{#each paged as row}
					<tr style="border-bottom: 1px solid var(--image-border-color);">
						<td class="px-3 py-2">
							{#if row.url}
								<a href={row.url} target="_blank" rel="noopener">{row.headline}</a>
							{:else}
								{row.headline}
							{/if}
							{#if row.Site}
								<span>({row.Site})</span>
							{/if}
						</td>
						<td class="px-3 py-2 whitespace-nowrap" style="color: #baa9d4">{formatDate(row.published_date)}</td>
					</tr>
				{/each}
				{#if rows.length === 0}
					<tr>
						<td class="px-3 py-4 text-center" colspan="2">
							{searching ? 'Searching…' : 'No results found.'}
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>

	{#if pageCount > 1}
		<div class="mt-1.5 w-full flex items-center justify-between py-2.5">
			<button
				class="cursor-pointer hover:opacity-70 select-none font-medium"
				onclick={() => (page = Math.max(0, page - 1))}
				disabled={page === 0}
			>
				Prev
			</button>

			<button
				class="cursor-pointer hover:opacity-70 select-none font-medium"
				onclick={() => (page = Math.min(pageCount - 1, page + 1))}
				disabled={page >= pageCount - 1}
			>
				Next
			</button>
		</div>
	{/if}
</div>

<style>
	button {
		color: var(--color-ui-accent);
	}

	button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	tbody tr:last-child {
		border-bottom: none !important;
	}
</style>
