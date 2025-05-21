import { i as ensure_array_like, l as add_styles, c as pop, m as stringify, p as push } from "../../../chunks/index.js";
/* empty css                                                */
import { a as attr } from "../../../chunks/attributes.js";
/* empty css                                                     */
function _page($$payload, $$props) {
  push();
  let innerWidth = 620;
  let { data } = $$props;
  let chartData = prepareChartData(data?.colourData);
  function prepareChartData(data2) {
    if (!data2 || !Array.isArray(data2)) return [];
    if (data2.length > 0) {
      console.log("First item sample:", data2[0]);
    }
    return data2;
  }
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="mb-6">This is a timeline of all my scribbles using the five main colours in each image. It still very experimental, but if you click on a colour you should get that image.</div> <div class="mb-6">I borrowed the idea to extract colours from images <a href="https://lab.slv.vic.gov.au/resources/introduction-to-k-means-clustering">from the State Library of Victoria</a>.</div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mb-8"><div class="w-full">`;
  if (chartData && chartData.length > 0) {
    $$payload.out += "<!--[-->";
    const itemWidth = 8;
    const containerWidth = Math.min(800, innerWidth - 40);
    const itemsPerRow = Math.floor(containerWidth / itemWidth);
    const totalRows = Math.ceil(chartData.length / itemsPerRow);
    const each_array = ensure_array_like(Array(totalRows));
    $$payload.out += `<div class="flex flex-col gap-[10px]"><!--[-->`;
    for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
      each_array[rowIndex];
      const isEvenRow = rowIndex % 2 === 0;
      const startIdx = rowIndex * itemsPerRow;
      const endIdx = Math.min((rowIndex + 1) * itemsPerRow, chartData.length);
      const rowItems = isEvenRow ? chartData.slice(startIdx, endIdx) : chartData.slice(startIdx, endIdx).reverse();
      const each_array_1 = ensure_array_like(rowItems);
      $$payload.out += `<div${attr("class", `flex h-[100px] ${stringify(isEvenRow ? "flex-row" : "flex-row-reverse")}`)}><!--[-->`;
      for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
        let item = each_array_1[colIndex];
        const each_array_2 = ensure_array_like(item.colorKeys);
        $$payload.out += `<div class="flex flex-col cursor-pointer"${attr("style", `width: ${stringify(itemWidth)}px;`)}${attr("title", new Date(item.Date).getFullYear())}><!--[-->`;
        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
          let key = each_array_2[$$index];
          $$payload.out += `<div${add_styles({ "background-color": item[key] })} class="flex-1"${attr("title", `${item[key]} - ${new Date(item.Date).getFullYear()}`)}></div>`;
        }
        $$payload.out += `<!--]--></div>`;
      }
      $$payload.out += `<!--]--> `;
      if (rowItems.length < itemsPerRow) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div style="flex: 1;"></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
export {
  _page as default
};
