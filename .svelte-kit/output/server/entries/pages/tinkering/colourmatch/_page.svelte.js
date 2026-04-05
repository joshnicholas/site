import { e as ensure_array_like, f as attr_class, b as attr_style, a as attr, d as derived, s as stringify } from "../../../../chunks/index.js";
/* empty css                                                        */
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let chartData = derived(() => prepareChartData(data?.colourData));
    function prepareChartData(data2) {
      if (!data2 || !Array.isArray(data2)) return [];
      return data2;
    }
    $$renderer2.push(`<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="mb-6">This is a timeline of all my scribbles using the five "most representative" colours in each image. If you click on a stack of colours you should get that image.</div> <div class="mb-6">I borrowed the methodology to extract colours from images <a href="https://lab.slv.vic.gov.au/resources/introduction-to-k-means-clustering">from the State Library of Victoria</a>.</div> <div class="mb-6">I'm still tinkering with all of this so it may break.</div> <div class="flex justify-center mb-8 h-[300px]">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mb-8 flex justify-center"><div class="w-full max-w-2xl mx-auto">`);
    if (chartData() && chartData().length > 0) {
      $$renderer2.push("<!--[0-->");
      const itemWidth = 8;
      const containerWidth = 640;
      const itemsPerRow = Math.floor(containerWidth / itemWidth);
      const totalRows = Math.ceil(chartData().length / itemsPerRow);
      $$renderer2.push(`<div class="flex flex-col gap-[10px]"><!--[-->`);
      const each_array = ensure_array_like(Array(totalRows));
      for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
        each_array[rowIndex];
        const isEvenRow = rowIndex % 2 === 0;
        const startIdx = rowIndex * itemsPerRow;
        const endIdx = Math.min((rowIndex + 1) * itemsPerRow, chartData().length);
        const rowItems = isEvenRow ? chartData().slice(startIdx, endIdx) : chartData().slice(startIdx, endIdx).reverse();
        $$renderer2.push(`<div${attr_class(`flex h-[80px] justify-center ${stringify(isEvenRow ? "flex-row" : "flex-row-reverse")}`)}><!--[-->`);
        const each_array_1 = ensure_array_like(rowItems);
        for (let colIndex = 0, $$length2 = each_array_1.length; colIndex < $$length2; colIndex++) {
          let item = each_array_1[colIndex];
          $$renderer2.push(`<div class="flex flex-col cursor-pointer"${attr_style(`width: ${stringify(itemWidth)}px;`)}${attr("title", new Date(item.Date).getFullYear())}><!--[-->`);
          const each_array_2 = ensure_array_like(item.colorKeys);
          for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
            let key = each_array_2[$$index];
            $$renderer2.push(`<div class="flex-1"${attr("title", `${item[key]} - ${new Date(item.Date).getFullYear()}`)}${attr_style("", { "background-color": item[key] })}></div>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mt-8 mb-10 text-xl pt-10"><a href="/tinkering" class="text-black">Back</a></div></div>`);
  });
}
export {
  _page as default
};
