<!-- Modal Component (Svelte 5) -->
<script>
  let { modalImage, rows } = $props();
  // console.log("row: ", rows)

  const colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3'];
  const i = Math.floor(Math.random() * colours.length);
</script>

<!-- alt="/images{modalRow["Title"]}" -->
<div class="mySlides">
  <img 
    style='border-color:{colours[i]}' 
    src="/images/{modalImage}" 
    class='max-h-[500px]'
    alt=""
  />
</div>

<style>
  img {
    border-width: 15px;
  }	
</style>