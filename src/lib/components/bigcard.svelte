<script>

export let modalImage
export let rows
// console.log("row: ", rows)

let colours = ['#DC5F00', '#B1C29E', '#789DBC', '#8967B3']
let i = Math.floor(Math.random() * colours.length);

</script>

<!-- alt="/images{modalRow["Title"]}" -->

<div class="mySlides">
    <img style='border-color:{colours[i]}' 
    src="/images/{modalImage}" 

    class = 'max-h-[500px]'
    >

  </div>




  <style>

img {
    border-width: 15px;
}	
  </style>