<script>

    export let upDown = 'down'

    let csso = upDown.toLowerCase() == 'down' ? 'border-top: 2px solid;margin-top:1.25rem;padding-top:0.5rem;' : 'border-bottom: 2px solid;margin-bottom:1.25rem;padding-bottom:0.5rem;'


</script>


<div id='navblock' style={csso}>

    <ul id='navynav' class='space-x-6 flex justify-start text-l font-semibold'>
        <li class="mr-0">
            <a href='/'>scribbles</a>
        </li >
        <!-- <li class="mr-0">
            <a href='https://www.theguardian.com/profile/josh-nicholas' target='_blank' rel="me">journalism</a>
        </li> -->
        <li class="mr-0">
            <a href='/about'>about</a>
        </li >
    </ul>

</div>


<style>

    /* #navblock {
        border-top: 2px solid;
    } */

    a {
    color: black !important;}

</style>

