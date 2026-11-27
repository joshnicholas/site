<script>
	import '../app.css'

	  import Navvy from '$lib/components/nav.svelte'

  </script>

<svelte:head>
	<title>Josh Nicholas</title>
	<meta name="description" content="Josh Nicholas is a journalist and scribbler" />
	<meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,visual journalism,data visualization,scribbles,scribbler,Guardian,ABC News,Guardian Australia,The Guardian,2ser,The Wire,The Conversation">

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": "https://joshnicholas.com/#person",
		"name": "Josh Nicholas",
		"url": "https://joshnicholas.com",
		"jobTitle": "Journalist",
		"worksFor": {
			"@type": "Organization",
			"name": "ABC News",
			"url": "https://www.abc.net.au/news"
		},
		"sameAs": [
			"https://joshnicholas.com",
			"https://joshnicholas.blog",
			"https://www.abc.net.au/news/josh-nicholas/107294250",
			"https://www.instagram.com/joshcnicholas/"
		]
	})}</script>`}
</svelte:head>

<div class='m-5'>

	<div class="mx-auto max-w-[800px] min-h-[calc(100dvh-2.5rem)] flex flex-col">


		<div class="flex-1">
			<slot />
		</div>

		<Navvy/>

	</div>
	


</div>

