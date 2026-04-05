import { f as copy_payload, g as assign_payload, p as pop, c as ensure_array_like, e as escape_html, s as stringify, a as push } from "../../../chunks/index.js";
import { I as IndexSlider } from "../../../chunks/IndexSlider.js";
import { a as attr } from "../../../chunks/attributes.js";
/* empty css                                                     */
function Linklist($$payload, $$props) {
  push();
  let { sortedData, pageLimit, colourdict } = $$props;
  let selectedIndex = 0;
  let formattedDate = "";
  let rows = sortedData.slice(selectedIndex, selectedIndex + 9);
  function getBaseUrl(url) {
    try {
      const urlObj = new URL(url);
      let hostname = urlObj.hostname;
      if (hostname.startsWith("www.")) {
        hostname = hostname.substring(4);
      }
      const parts = hostname.split(".");
      if (parts.length <= 2) {
        return hostname;
      }
      const lastPart = parts[parts.length - 1];
      const secondLastPart = parts[parts.length - 2];
      const genericTlds = [
        "com",
        "co",
        "org",
        "net",
        "edu",
        "gov",
        "mil",
        "int"
      ];
      if (lastPart.length === 2 && genericTlds.includes(secondLastPart)) {
        return parts.slice(-3).join(".");
      }
      return parts.slice(-2).join(".");
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  }
  function colouriser(category) {
    return colourdict[category] || "#007cc9";
  }
  let scrolly;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(rows);
    $$payload2.out += `<div></div> <div class="min-h-[600px] container gap-6 mx-auto items-center text-center">`;
    IndexSlider($$payload2, {
      sortedData,
      increment: 1,
      scrolly,
      get selectedIndex() {
        return selectedIndex;
      },
      set selectedIndex($$value) {
        selectedIndex = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="text-center pb-5"><span class="text-lg font-medium">${escape_html(formattedDate)}</span></div> <ul class="max-w-[800px] mx-auto space-y-2 list-none"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload2.out += `<li class="relative pl-6 text-left"><div class="absolute left-0 top-2 w-3 h-3 rounded-full"${attr("style", `background-color: ${stringify(colouriser(item.category))}`)}></div> `;
      if (item.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<a${attr("href", item.url)} target="_blank" class="font-bold text-black">${escape_html(item.title)}</a>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (item.quote && item.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<span>-</span>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (item.quote) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<span class="italic quote-fade tooltip-container svelte-btw94a"${attr("title", `"${stringify(item.quote)}"`)}>"${escape_html(item.quote)}"</span>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (item.text) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<span>${escape_html(item.text)}</span>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <span>-</span> <span><a${attr("href", item.url)} target="_blank">${escape_html(getBaseUrl(item.url))}</a></span></li>`;
    }
    $$payload2.out += `<!--]--></ul></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function SearchComponent($$payload, $$props) {
  push();
  let searchTerm = "";
  $$payload.out += `<div class="flex items-center gap-2"><label for="search" class="text-sm font-medium">Search:</label> <div class="relative"><input id="search" type="text"${attr("value", searchTerm)} placeholder="Search title, quote, text, category..." class="px-4 py-2 pr-10 border-2 border-black focus:outline-none focus:ring-0 bg-transparent w-36 md:w-64 text-black placeholder-gray-500"> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let categories = [
    ...new Set(data.data.map((d) => d.category))
  ];
  categories = categories.toSpliced(0, 0, "All");
  let searchFilteredData = data.data;
  let sortedData = searchFilteredData.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  function handleFilteredData(filtered) {
    searchFilteredData = filtered;
  }
  let colourdict = {
    "Tool": "#e64c5b",
    "Article": "#B1C29E",
    "Misc": "#789DBC",
    "Data": "#A272AD",
    "Vis": "#DAFA7A"
  };
  const each_array = ensure_array_like(Object.keys(colourdict));
  const each_array_1 = ensure_array_like(Object.entries(colourdict));
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="flex flex-col md:flex-row items-center justify-center gap-2"><div class="flex flex-row items-center justify-center gap-2 md:gap-4">`;
  SearchComponent($$payload, {
    data: data.data,
    onFilteredData: handleFilteredData
  });
  $$payload.out += `<!----> <div class="flex items-center gap-2"><span>Filter:</span> <select class="px-4 py-2 text-center bg-transparent border-2 border-black focus:outline-none focus:ring-0"><option value="All">All</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cat = each_array[$$index];
    $$payload.out += `<option${attr("value", cat)}>${escape_html(cat)}</option>`;
  }
  $$payload.out += `<!--]--></select></div></div> <div class="flex items-center gap-2 flex-wrap justify-center"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let [key, color] = each_array_1[$$index_1];
    $$payload.out += `<div class="flex items-center gap-1"><div class="w-3 h-3"${attr("style", `background-color: ${stringify(color)}`)}></div> <span class="text-sm">${escape_html(key)}</span></div>`;
  }
  $$payload.out += `<!--]--></div></div> <!---->`;
  {
    Linklist($$payload, { sortedData, pageLimit: 8, colourdict });
  }
  $$payload.out += `<!----> <div class="pt-10">This page only gets updated about once a week, when the site gets rebuilt. Still under development and highly likely to randomly break.</div></div>`;
  pop();
}
export {
  _page as default
};
