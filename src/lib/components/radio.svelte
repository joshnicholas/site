<script>
  
    export let options;
    export let legend;
    export let userSelected

      
      const uniqueID = Math.floor(Math.random() * 100)
  
    const slugify = (str = "") =>
      str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

      // $:console.log(userSelected)
  </script>

<div id='sortRow' class="flex justify-start text-l pb-5">

  <!-- <span>{legend}</span> -->
  {#each options as option}
  <input
    class="sr-only mr-5"
    type="radio"
    id={slugify(option)}
    bind:group={userSelected}
    value={option} />
  <label for={slugify(option)}> {option} </label>
{/each}
</div>
  
  


  
  <style>
              :root {
          --accent-color: black;
          --gray: black;
      }
      
     .group-container {
        border-radius: 2px;
        display: flex;
        flex-direction: row;
      }
  
    .legend {
      font-weight: bold;
    }
    label {
      user-select: none;
      padding-right:0.5em;

    }
  
    .sr-only {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  
    input[type="radio"] {
      position: absolute;
    }
  
    input[type="radio"] + label {
      display: block;
      position: relative;
      text-align: left;
    }
  
    input[type="radio"] + label::before {
        content: "";
        position: relative;
        display: inline-block;
        margin-right: 0.5em;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 1px solid var(--gray, #ccc);
        border-radius: 50%;
        top: 0.2em;
    }
  
    input[type="radio"]:checked + label::before {
      border: 1px solid var(--gray, #ccc);
      border-radius: 50%;
    }
  
    input[type="radio"] + label::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 0.6em;
      height: 0.6em;
      top: 0.5em;
      left: 0.215em;
      background: var(--accent-color, #282828);
      border: 1px solid var(--accent-color, #282828);
      border-radius: 50%;
      transform: scale(0);
    }
  
    input[type="radio"]:checked + label::after {
      opacity: 1;
      transform: scale(1);
    }
  
    input[type="radio"]:focus + label::before {
      /* box-shadow: 0 0 0 1px var(--accent-color, #282828); */
      border-radius: 50%;
    }  
    
    input[type="radio"]:disabled + label {
      color: darken(var(--black, #ccc), 10);
    }
  
    input[type="radio"]:disabled + label::before {
      background: var(--black, #ccc);
    } 
    /* gravy */
  
  
    input[type="radio"] + label::before {
        transition: background 0.3s ease-out;
    }
  
    input[type="radio"]:checked + label::before {
      transition: background 0.3s ease-in;
    }
  
    input[type="radio"] + label::after {
      transition: transform 0.2s ease-out;
    }
  
    input[type="radio"]:checked + label::after {
      transition: transform 0.2s ease-in;
    }
  
    input[type="radio"]:focus + label::before {
      /* box-shadow: 0 0px 8px var(--accent-color, #282828); */
      border-radius: 50%;
    }
  
  </style>
  