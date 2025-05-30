import { s as stringify, a as escape_html, c as bind_props, p as pop, b as push, f as copy_payload, g as assign_payload, e as ensure_array_like } from "./index2.js";
import { f as fallback } from "./utils.js";
import { timeParse, timeFormat } from "d3-time-format";
import { a as attr } from "./attributes.js";
function Card($$payload, $$props) {
  push();
  let row = $$props["row"];
  let modalOpen = $$props["modalOpen"];
  let index = $$props["index"];
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  let i = Math.floor(Math.random() * colours.length);
  let dateParse = timeParse("%Y-%m-%d");
  let dateFormat = timeFormat("%b %Y");
  $$payload.out += `<div><img class="cardy mx-auto svelte-1yq8s6w"${attr("id", index)}${attr("width", row["Width"])}${attr("height", row["Height"])}${attr("style", `border-color:${stringify(colours[i])};background-color:"${stringify(colours[i])}"`)}${attr("src", `/images/${stringify(row["img_path"])}`)}${attr("alt", row["Title"])}> <span class="text-l">${escape_html(row["Title"])}</span><br> <span class="text-xs">${escape_html(dateFormat(dateParse(row["Date"])))}</span></div>`;
  bind_props($$props, { row, modalOpen, index });
  pop();
}
function ImageSet($$payload, $$props) {
  push();
  let isFirstPage, hasNextPage, showPrev, showNext;
  let datah = $$props["datah"];
  let pageLimit = $$props["pageLimit"];
  let isSortTime = fallback($$props["isSortTime"], false);
  let firstImage = 0;
  let lastImage = firstImage + pageLimit;
  let lenno;
  let rows;
  rows = datah.slice(firstImage, lastImage);
  isFirstPage = lastImage - pageLimit == 0 ? true : false;
  hasNextPage = lastImage >= lenno ? false : true;
  showPrev = isFirstPage ? "hidden" : "visible";
  showNext = !hasNextPage ? "hidden" : "visible";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(rows);
    $$payload2.out += `<div></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pb-5 pt-5"><button id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</button> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <button id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</button></div> <div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let row = each_array[index];
      Card($$payload2, {
        index,
        get row() {
          return row;
        },
        set row($$value) {
          row = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]--></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pt-10"><button id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</button> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <button id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</button></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { datah, pageLimit, isSortTime });
  pop();
}
export {
  ImageSet as I
};
