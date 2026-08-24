<script>
	import MiniSearch from 'minisearch';
	import { journoSearchOptions, journoQueryOptions } from '$lib/journoSearchOptions.js';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

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

	let rows = $derived(searchResults ?? data.data);
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

	<div class="mb-10">
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search headline, tags, article text..."
			class="w-full px-4 py-2 bg-transparent text-[color:var(--color-text)] placeholder-[color:var(--color-ui-accent)] focus:outline-none"
			style="border-bottom: 2px solid var(--color-ui-accent);"
		/>
	</div>

	<div class="overflow-x-auto">
		<table class="w-full text-left border-collapse">
			<thead>
				<tr style="border-bottom: 2px solid var(--color-ui-accent);">
					<th class="px-3 py-2">Headline</th>
					<th class="px-3 py-2 whitespace-nowrap">Published</th>
				</tr>
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
						<td class="px-3 py-2 whitespace-nowrap">{formatDate(row.published_date)}</td>
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
</style>
