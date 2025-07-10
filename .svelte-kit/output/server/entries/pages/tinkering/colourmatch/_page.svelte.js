import { b as ensure_array_like, i as add_styles, p as pop, s as stringify, a as push } from "../../../../chunks/index2.js";
/* empty css                                                   */
import { a as attr } from "../../../../chunks/attributes.js";
/* empty css                                                        */
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let chartData = prepareChartData(data?.colourData);
  function prepareChartData(data2) {
    if (!data2 || !Array.isArray(data2)) return [];
    return data2;
  }
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="mb-6">This is a timeline of all my scribbles using the five "most representative" colours in each image. If you click on a stack of colours you should get that image.</div> <div class="mb-6">I borrowed the methodology to extract colours from images <a href="https://lab.slv.vic.gov.au/resources/introduction-to-k-means-clustering">from the State Library of Victoria</a>.</div> <div class="mb-6">I'm still tinkering with all of this so it may break.</div> <div class="flex justify-center mb-8 h-[300px]">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="mb-8 flex justify-center"><div class="w-full max-w-2xl mx-auto">`;
  if (chartData && chartData.length > 0) {
    $$payload.out += "<!--[-->";
    const itemWidth = 8;
    const containerWidth = 640;
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
      $$payload.out += `<div${attr("class", `flex h-[80px] justify-center ${stringify(isEvenRow ? "flex-row" : "flex-row-reverse")}`)}><!--[-->`;
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
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div class="mt-8 mb-10 text-xl pt-10"><a href="/tinkering" class="text-black">Back</a></div></div>`;
  pop();
}
export {
  _page as default
};
