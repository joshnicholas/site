<script>
	import '../app.css'
  
	  import Navvy from '$lib/components/nav.svelte'
	  export const prerender = false

  </script>

<div class='m-5'>

	<div class="mx-auto max-w-[800px] min-h-[600px]">

		<slot />
	
		<Navvy/>

	</div>
	


</div>

