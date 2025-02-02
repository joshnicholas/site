<script>
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
    // import Card from '$lib/components/card.svelte'
    // import Radio from '$lib/components/radio.svelte'
    // import Bigcard from '$lib/components/bigcard.svelte'
    
    export let datah
    export let pageLimit
    export let title

    let lenno
    let rows

    onMount(() => {
    
        // shuffled = sorter(datah, sortBy, firstImage, lastImage)
        lenno = datah.length
        rows = datah.slice(0, pageLimit)
        // console.log("rows: ", rows) 
        // rows = shuffled.slice(firstImage, lastImage)
    
      })

      let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']

        let i = Math.floor(Math.random() * colours.length);
    
    </script>

    <div class='postList'>

        <div class='text-l font-semibold'>{title}</div>
        <div class='mb-5 text-xs'>This is only updated when the rest of the site is.</div>

        <ul class="list-disc ml-5">
            {#each rows as row, index}
                <li>{row.title} - <a href={row.link}>Link</a>

                </li>

            {/each}
            </ul>

    </div>


<style>

.postList {
    clear: left;
}

</style>