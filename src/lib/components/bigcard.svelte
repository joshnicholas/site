<!-- Modal Component (Svelte 5) -->
<script>
  import { getRandomBorderColor } from '$lib/config/colors.js'

  let { modalImage, rows } = $props();
  let borderColor = getRandomBorderColor()
</script>

<!-- alt="/images{modalRow["Title"]}" -->
<div class="mySlides">
  <img
    style='border-color:{borderColor};border-width:var(--image-border-width);border-style:solid;'
    src="/images/{modalImage}"
    class='max-h-[500px]'
    alt=""
  />
</div>