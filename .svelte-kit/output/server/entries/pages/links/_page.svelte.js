import { e as ensure_array_like, b as attr_style, s as stringify, a as attr, d as derived } from "../../../chunks/index.js";
import { I as IndexSlider } from "../../../chunks/IndexSlider.js";
import { e as escape_html } from "../../../chunks/context.js";
/* empty css                                                     */
function Linklist($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { sortedData, pageLimit, colourdict } = $$props;
    let selectedIndex = 0;
    let formattedDate = "";
    let rows = derived(() => sortedData.slice(selectedIndex, selectedIndex + 9));
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
        const genericTlds = ["com", "co", "org", "net", "edu", "gov", "mil", "int"];
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
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div></div> <div class="min-h-[600px] container gap-6 mx-auto items-center text-center">`);
      IndexSlider($$renderer3, {
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
      $$renderer3.push(`<!----> <div class="text-center pb-5"><span class="text-lg font-medium">${escape_html(formattedDate)}</span></div> <ul class="max-w-[800px] mx-auto space-y-2 list-none"><!--[-->`);
      const each_array = ensure_array_like(rows());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer3.push(`<li class="relative pl-6 text-left"><div class="absolute left-0 top-2 w-3 h-3 rounded-full"${attr_style(`background-color: ${stringify(colouriser(item.category))}`)}></div> `);
        if (item.title) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<a${attr("href", item.url)} target="_blank" class="font-bold text-black">${escape_html(item.title)}</a>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (item.quote && item.title) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span>-</span>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (item.quote) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span class="italic quote-fade tooltip-container svelte-t48144"${attr("title", `"${stringify(item.quote)}"`)}>"${escape_html(item.quote)}"</span>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        if (item.text) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span>${escape_html(item.text)}</span>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <span>-</span> <span><a${attr("href", item.url)} target="_blank">${escape_html(getBaseUrl(item.url))}</a></span></li>`);
      }
      $$renderer3.push(`<!--]--></ul></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function SearchComponent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let searchTerm = "";
    $$renderer2.push(`<div class="flex items-center gap-2"><label for="search" class="text-sm font-medium">Search:</label> <div class="relative"><input id="search" type="text"${attr("value", searchTerm)} placeholder="Search title, quote, text, category..." class="px-4 py-2 pr-10 border-2 border-black focus:outline-none focus:ring-0 bg-transparent w-36 md:w-64 text-black placeholder-gray-500"/> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let categories = [...new Set(data.data.map((d) => d.category))];
    categories = categories.toSpliced(0, 0, "All");
    let selectedCat = "All";
    let searchFilteredData = data.data;
    let sortedData = derived(() => searchFilteredData.slice().sort((a, b) => new Date(b.date) - new Date(a.date)));
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
    $$renderer2.push(`<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="flex flex-col md:flex-row items-center justify-center gap-2"><div class="flex flex-row items-center justify-center gap-2 md:gap-4">`);
    SearchComponent($$renderer2, { data: data.data, onFilteredData: handleFilteredData });
    $$renderer2.push(`<!----> <div class="flex items-center gap-2"><span>Filter:</span> `);
    $$renderer2.select(
      {
        value: selectedCat,
        class: "px-4 py-2 text-center bg-transparent border-2 border-black focus:outline-none focus:ring-0"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "All" }, ($$renderer4) => {
          $$renderer4.push(`All`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(Object.keys(colourdict));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let cat = each_array[$$index];
          $$renderer3.option({ value: cat }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(cat)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div></div> <div class="flex items-center gap-2 flex-wrap justify-center"><!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(colourdict));
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let [key, color] = each_array_1[$$index_1];
      $$renderer2.push(`<div class="flex items-center gap-1"><div class="w-3 h-3"${attr_style(`background-color: ${stringify(color)}`)}></div> <span class="text-sm">${escape_html(key)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <!---->`);
    {
      Linklist($$renderer2, { sortedData: sortedData(), pageLimit: 8, colourdict });
    }
    $$renderer2.push(`<!----> <div class="pt-10">This page only gets updated about once a week, when the site gets rebuilt. Still under development and highly likely to randomly break.</div></div>`);
  });
}
export {
  _page as default
};
