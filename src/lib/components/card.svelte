<script>

export let row
export let modalOpen
// export let modalImage
// export let modalIndex
// export let imagePathos
export let index

import { timeParse, timeFormat } from 'd3-time-format'

$: modalShow = modalOpen == false ? "none" : 'block'

// console.log("OBj: ", Object.keys(row))
// [ "Date", "Title", "img_path", "Caption", "Colours", "Style", "Subject", "Keywords", "Category" ]

// console.log("row: ", row)
// console.log("row.image_path: ", row["img_path"])

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']

let i = Math.floor(Math.random() * colours.length);

let dateParse = timeParse("%Y-%m-%d")
let dateFormat = timeFormat("%d %b %Y")



// function getImageUrl(name) {
//   // note that this does not include files in subdirectories
//   return new URL(`/images/${name}`, import.meta.url).href
// }

// let imgSrc = getImageUrl(imagePathos)
// console.log("imgSrc: ", imgSrc)

// let images = import.meta.glob('$lib/images/*.{jpg,jpeg,png}',
//       { query: { enhanced: true },
// 	import: 'default',
// 	eager: true
//       })



</script>


<div>

<img class='cardy mx-auto' 
id={index}
width={row["Width"]}
height={row['Height']}
style='border-color:{colours[i]};background-color:"{colours[i]}"' 
src="images/{row["img_path"]}" 
alt="{row["Title"]}"
on:click={() => modalOpen = true}
on:click={() => modalImage = row["img_path"]}
on:click={() => modalIndex = index}

>

<!-- <div style='border-color:{colours[i]};border-width: 10px;' >
<enhanced:img src="{images[`/src/lib/images/${imagePathos}`]}"  alt="An alt text" />
</div> -->

<span class='text-l'>{row["Title"]}</span><br>

<span class='text-xs'>{dateFormat(dateParse(row["Date"]))}</span>
<!-- <span>{row["Date"]}</span> -->


</div>

<!-- /132Sawaguywithpigtailsinhisbeardf.jpg

<enhanced:img src="./path/to/your/image.jpg" alt="An alt text" /> -->



<style>




img {
    border-width: 10px;
    /* border-color: #B1C29E; */
    /* border-color: #F0A04B; */

    /* border-color: #DC5F00; */
}

</style>