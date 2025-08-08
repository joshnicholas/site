<!-- BackToTop.svelte -->
<script>
  let showButton = $state(false);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function handleScroll() {
    showButton = window.scrollY > 300;
  }
  
  $effect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });
</script>

{#if showButton}
  <button 
    class="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-black text-white border-none text-xl font-bold cursor-pointer z-50 shadow-lg transition-opacity duration-300 md:hidden hover:bg-gray-800 active:scale-95"
    on:click={scrollToTop}
    aria-label="Back to top"
  >
    ↑
  </button>
{/if}