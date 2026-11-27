<script>
	/** @type {{ title: string, description: string, path?: string, image?: string, noindex?: boolean }} */
	let {
		title,
		description,
		path = '/',
		image = 'https://joshnicholas.com/blueyellow.jpg',
		noindex = false
	} = $props();

	const url = `https://joshnicholas.com${path}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
