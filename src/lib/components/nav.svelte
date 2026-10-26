<script>
    export let upDown = 'down'

    let csso = upDown.toLowerCase() == 'down' ? 'border-top: 2px solid var(--color-ui-accent);margin-top:1.25rem;padding-top:0.5rem;display:inline-block;' : 'border-bottom: 2px solid var(--color-ui-accent);margin-bottom:1.25rem;padding-bottom:0.5rem;display:inline-block;'
</script>

<!-- <div class='text-center'>
<div id='navblock' class='block' style={csso}>
    <ul id='navynav' class='space-x-6 flex justify-center text-l font-semibold'>
        <li class="mr-0">
            <a href='/'>scribbles</a>
        </li >
        <li class="mr-0">
            <a href='http://joshnicholas.blog/' rel="me">blog</a>
        </li >
        <li class="mr-0">
            <a href='/journalism'>journalism</a>
        </li >
        <li class="mr-0">
            <a href='/about'>about</a>
        </li >
    </ul>
</div>
</div> -->


<div class="nav-wrap">
  <div class="navblock" style={csso}>
    <ul class="navlinks">
      <li><a rel="me" href="/">scribbles</a></li>
      <li><a href="https://links.joshnicholas.com/">linklog</a></li>
      <li><a rel="me" href="http://joshnicholas.blog/">blog</a></li>
      <li><a rel="me" href="/journalism">journalism</a></li>
      <li><a rel="me" href="/about">about</a></li>
      <li><a href="https://links.joshnicholas.com/rss">links rss</a></li>
      <li><a rel='me' href="https://joshnicholas.blog/feed">blog rss</a></li>
    </ul>
  </div>
</div>

  <style>
      .nav-wrap {
          text-align: center;
      }

      .navblock {
          display: inline-block;
      }

      ul {
          list-style: none;
          padding-left: 0;
      }

      .navlinks {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-weight: 600;
      }
  </style>