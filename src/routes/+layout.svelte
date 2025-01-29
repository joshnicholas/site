<script>
	import '../app.css'
  
	  import Navvy from '$lib/components/nav.svelte'
	  export const prerender = false

  </script>

<svelte:head>
	<title>Josh Nicholas</title>
	<meta name="description" content="Josh Nicholas is a journalist and scribbler" />
	<meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,data visualization,scribbles,scribbler,Guardian,Guardian Australia,The Guardian,2ser,The Wire,The Conversation">
</svelte:head>

<div class='m-5'>

	<div class="mx-auto max-w-[800px] min-h-[600px]">

		<slot />
	
		<Navvy/>

	</div>
	


</div>

