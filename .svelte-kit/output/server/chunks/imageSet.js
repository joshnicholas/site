import { s as stringify, e as escape_html, b as bind_props, p as pop, a as push, f as copy_payload, g as assign_payload, c as ensure_array_like } from "./index.js";
import { timeParse, timeFormat } from "d3-time-format";
import { a as attr } from "./attributes.js";
import { I as IndexSlider } from "./IndexSlider.js";
function Card($$payload, $$props) {
  push();
  let row = $$props["row"];
  let modalOpen = $$props["modalOpen"];
  let index = $$props["index"];
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  let i = Math.floor(Math.random() * colours.length);
  let dateParse = timeParse("%Y-%m-%d");
  let dateFormat = timeFormat("%b %Y");
  $$payload.out += `<div><button type="button" class="border-0 p-0 bg-transparent cursor-pointer"><img class="cardy mx-auto svelte-1h8huwi"${attr("id", index)}${attr("width", row["Width"])}${attr("height", row["Height"])}${attr("style", `border-color:${stringify(colours[i])};background-color:"${stringify(colours[i])}"`)}${attr("src", `/images/${stringify(row["webp_path"])}`)}${attr("alt", row["Title"])} decoding="async"${attr("fetchpriority", index < 3 ? "high" : "auto")}></button> <div class="mt-2 mb-4"><span class="text-l">${escape_html(row["Title"])}</span><br> <span class="text-xs">${escape_html(dateFormat(dateParse(row["Date"])))}</span></div></div>`;
  bind_props($$props, { row, modalOpen, index });
  pop();
}
function ImageSet($$payload, $$props) {
  push();
  let { datah, pageLimit, isSortTime = false } = $$props;
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
    $$payload2.out += `<!----></div> <div class="container min-h-[900px] grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto items-center text-center"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let row = each_array[index];
      Card($$payload2, {
        index,
        row,
        currentIndex,
        selected: currentIndex === displayIndices.startIndex + index
      });
    }
    $$payload2.out += `<!--]--></div> <div class="container mx-auto pb-2.5"><div class="mt-1.5 w-full flex items-center justify-between py-2.5"><button class="text-black cursor-pointer hover:opacity-70 select-none font-medium svelte-1iawxg6"${attr("disabled", currentIndex <= 0, true)}>Prev</button> <button class="text-black cursor-pointer hover:opacity-70 select-none font-medium svelte-1iawxg6"${attr("disabled", currentIndex >= datah.length - 1, true)}>Next</button></div></div>`;
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
