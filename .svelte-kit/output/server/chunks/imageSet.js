import { s as stringify, p as pop, a as push, f as copy_payload, g as assign_payload, c as ensure_array_like } from "./index.js";
import { timeParse, timeFormat } from "d3-time-format";
import { a as attr } from "./attributes.js";
import { I as IndexSlider } from "./IndexSlider.js";
const borderColors = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
function getRandomBorderColor() {
  return borderColors[Math.floor(Math.random() * borderColors.length)];
}
function Card($$payload, $$props) {
  push();
  let { row, index } = $$props;
  let borderColor = getRandomBorderColor();
  timeParse("%Y-%m-%d");
  timeFormat("%b %Y");
  $$payload.out += `<button type="button" class="border-0 p-0 bg-transparent cursor-pointer w-full block relative"><img class="cardy w-full h-auto block svelte-1mu4a96"${attr("id", index)}${attr("width", row["Width"])}${attr("height", row["Height"])}${attr("style", `border-color:${stringify(borderColor)};border-width:var(--image-border-width);border-style:solid;`)}${attr("src", `/images/${stringify(row["webp_path"])}`)}${attr("alt", row["Title"])} decoding="async"${attr("fetchpriority", index < 3 ? "high" : "auto")}> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button>`;
  pop();
}
function ImageSet($$payload, $$props) {
  push();
  let { datah, pageLimit, isSortTime = false } = $$props;
  let firstImage = 0;
  let rows = [];
  let scrolly = void 0;
  let currentIndex = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(rows);
    $$payload2.out += `<div></div> <div class="container mx-auto pb-2.5">`;
    IndexSlider($$payload2, {
      sortedData: datah,
      scrolly,
      get selectedIndex() {
        return currentIndex;
      },
      set selectedIndex($$value) {
        currentIndex = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="container mx-auto image-columns svelte-bc8kr0"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let row = each_array[index];
      Card($$payload2, {
        index,
        row,
        currentIndex,
        selected: currentIndex === firstImage + index
      });
    }
    $$payload2.out += `<!--]--></div> <div class="container mx-auto pb-2.5"><div class="mt-1.5 w-full flex items-center justify-between py-2.5"><button class="text-black cursor-pointer hover:opacity-70 select-none font-medium svelte-bc8kr0"${attr("disabled", currentIndex <= 0, true)}>Prev</button> <button class="text-black cursor-pointer hover:opacity-70 select-none font-medium svelte-bc8kr0"${attr("disabled", currentIndex >= datah.length - 1, true)}>Next</button></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  ImageSet as I
};
