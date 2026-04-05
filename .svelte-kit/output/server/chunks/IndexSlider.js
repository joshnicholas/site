import { a as attr, c as bind_props, d as derived } from "./index.js";
function IndexSlider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      sortedData,
      selectedIndex = 0,
      increment = 12,
      indexBelow = false,
      scrolly = null
    } = $$props;
    const minIndex = derived(() => 0);
    const maxIndex = derived(() => sortedData.length - 1);
    $$renderer2.push(`<div class="mt-2.5 w-full flex items-center gap-2 py-5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1rgccp9"${attr("disabled", selectedIndex <= minIndex(), true)}>Prev</button> <div class="flex-1 relative px-6"><input type="range" class="index-slider w-full cursor-pointer bg-transparent appearance-none svelte-1rgccp9"${attr("min", minIndex())}${attr("max", maxIndex())}${attr("step", increment)}${attr("value", selectedIndex)}/></div> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1rgccp9"${attr("disabled", selectedIndex >= maxIndex(), true)}>Next</button></div>`);
    bind_props($$props, { selectedIndex });
  });
}
export {
  IndexSlider as I
};
