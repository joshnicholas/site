<script>

let { row, index } = $props();

import { timeParse, timeFormat } from 'd3-time-format'

let showText = $state(false)

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']
let i = Math.floor(Math.random() * colours.length)

let dateParse = timeParse("%Y-%m-%d")
let dateFormat = timeFormat("%b %Y")

</script>

<button
  type="button"
  class="border-0 p-0 bg-transparent cursor-pointer w-full block relative"
  onclick={() => showText = !showText}
>
  <img
    class='cardy w-full h-auto block'
    id={index}
    width={row["Width"]}
    height={row['Height']}
    style='border-color:{colours[i]};border-width:5px;border-style:solid;'
    src="/images/{row['webp_path']}"
    alt={row["Title"]}
    decoding="async"
    fetchpriority={index < 3 ? "high" : "auto"}
  />

  {#if showText}
  <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
    <div class='text-center text-white'>
      <h2 class='text-xl font-semibold mb-1'>{row["Title"]}</h2>
      <p class='text-sm'>{dateFormat(dateParse(row["Date"]))}</p>
    </div>
  </div>
  {/if}
</button>



<style>

.cardy {
    display: block;
}

</style>