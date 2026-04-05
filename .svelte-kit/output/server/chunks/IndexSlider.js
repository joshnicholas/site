import { b as bind_props, p as pop, a as push } from "./index.js";
import { a as attr } from "./attributes.js";
function IndexSlider($$payload, $$props) {
  push();
  let {
    sortedData,
    selectedIndex = 0,
    increment = 12,
    indexBelow = false,
    scrolly = null
  } = $$props;
  const minIndex = 0;
  const maxIndex = sortedData.length - 1;
  sortedData[selectedIndex]?.Date;
  $$payload.out += `<div class="mt-2.5 w-full flex items-center gap-2 py-5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-laiuo9"${attr("disabled", selectedIndex <= minIndex, true)}>Prev</button> <div class="flex-1 relative px-6"><input type="range" class="index-slider w-full cursor-pointer bg-transparent appearance-none svelte-laiuo9"${attr("min", minIndex)}${attr("max", maxIndex)}${attr("step", increment)}${attr("value", selectedIndex)}></div> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-laiuo9"${attr("disabled", selectedIndex >= maxIndex, true)}>Next</button></div>`;
  bind_props($$props, { selectedIndex });
  pop();
}
export {
  IndexSlider as I
};
