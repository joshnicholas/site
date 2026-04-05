import { a as attr, b as attr_style, s as stringify, e as ensure_array_like, d as derived } from "./index.js";
import { timeParse, timeFormat } from "d3-time-format";
import { I as IndexSlider } from "./IndexSlider.js";
const borderColors = ["#ffb6c5", "#ffbb95", "#f2c877", "#c5d882", "#91e2ad", "#75e1de", "#91d8ff", "#c3c9ff", "#efbcf0"];
function getRandomBorderColor() {
  return borderColors[Math.floor(Math.random() * borderColors.length)];
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { row, index } = $$props;
    let borderColor = getRandomBorderColor();
    timeParse("%Y-%m-%d");
    timeFormat("%b %Y");
    $$renderer2.push(`<button type="button" class="border-0 p-0 bg-transparent cursor-pointer w-full block relative"><img class="cardy w-full h-auto block svelte-1u0xoi6"${attr("id", index)}${attr("width", row["Width"])}${attr("height", row["Height"])}${attr_style(`border-color:${stringify(borderColor)};border-width:var(--image-border-width);border-style:solid;`)}${attr("src", `/images/${stringify(row["webp_path"])}`)}${attr("alt", row["Title"])} decoding="async"${attr("fetchpriority", index < 3 ? "high" : "auto")}/> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></button>`);
  });
}
function ImageSet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { datah, pageLimit, isSortTime = false } = $$props;
    let firstImage = 0;
    Math.min(pageLimit, datah?.length ?? 0);
    datah?.length ?? 0;
    let rows = datah ? datah.slice(0, Math.min(pageLimit, datah.length)) : [];
    let scrolly = void 0;
    let currentIndex = 0;
    const columns = derived(() => [
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 0),
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 1),
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 2)
    ]);
    let columnOffsets = [0, 0, 0];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div></div> <div class="container mx-auto pb-2.5">`);
      IndexSlider($$renderer3, {
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
      $$renderer3.push(`<!----></div> <div class="container mx-auto md:hidden"><!--[-->`);
      const each_array = ensure_array_like(rows);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let row = each_array[index];
        $$renderer3.push(`<div class="mb-5">`);
        Card($$renderer3, {
          index,
          row,
          currentIndex,
          selected: currentIndex === firstImage + index
        });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="container mx-auto hidden md:flex gap-[5px] items-start"><!--[-->`);
      const each_array_1 = ensure_array_like(columns());
      for (let c = 0, $$length = each_array_1.length; c < $$length; c++) {
        let col = each_array_1[c];
        $$renderer3.push(`<div class="flex-1"${attr_style(`padding-top: ${stringify(columnOffsets[c])}px`)}><!--[-->`);
        const each_array_2 = ensure_array_like(col);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let { row, i } = each_array_2[$$index_1];
          $$renderer3.push(`<div class="mb-[5px]">`);
          Card($$renderer3, {
            index: i,
            row,
            currentIndex,
            selected: currentIndex === firstImage + i
          });
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="container mx-auto pb-2.5"><div class="mt-1.5 w-full flex items-center justify-between py-2.5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1fopwo1"${attr("disabled", currentIndex <= 0, true)}>Prev</button> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1fopwo1"${attr("disabled", currentIndex >= datah.length - 1, true)}>Next</button></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  ImageSet as I
};
