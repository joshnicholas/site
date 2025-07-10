import { b as ensure_array_like, e as escape_html, s as stringify, p as pop, a as push } from "../../../chunks/index2.js";
import { a as attr } from "../../../chunks/attributes.js";
/* empty css                                                */
/* empty css                                                     */
function Linklist($$payload, $$props) {
  push();
  let { sortedData, pageLimit, colourdict } = $$props;
  let firstCard = 0;
  let lastCard = firstCard + pageLimit;
  let lenno = sortedData.length;
  let rows = sortedData.slice(firstCard, lastCard);
  let isFirstPage = lastCard - pageLimit == 0 ? true : false;
  let hasNextPage = lastCard >= lenno ? false : true;
  let showPrev = isFirstPage ? "hidden" : "visible";
  let showNext = !hasNextPage ? "hidden" : "visible";
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
  function fixDate(thingo) {
    const date = new Date(thingo);
    return `${date.getDate()} ${date.toLocaleDateString("en-US", { month: "short" })} ${date.getFullYear()}`;
  }
  function colouriser(thingo) {
    if (Object.keys(colourdict).includes(thingo)) {
      return colourdict[thingo];
    }
  }
  const each_array = ensure_array_like(rows);
  $$payload.out += `<div></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pb-5 pt-5"><button id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</button> <span class="text-xs font-semibold">${escape_html(lastCard)}/${escape_html(lenno)}</span> <button id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</button></div> <div class="container gap-6 mx-auto items-center text-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div class="p-5 max-w-[600px] mt-5 mb-5 [&amp;:not(:last-child)]:border mx-auto"${attr("style", `border-color:${stringify(colouriser(item.Category))}; border-width: 5px; border-opacity:0.1`)}>`;
    if (item.Title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", item.URL)} target="_blank"><h2 class="text-lg font-bold mb-4">${escape_html(item.Title)}</h2></a> <p>${escape_html(item.URL)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.Quote) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<blockquote class="text-lg italic mb-4 border-l-4 border-black pl-4">"${escape_html(item.Quote)}"</blockquote>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.Text) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="mb-4">${escape_html(item.Text)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <a${attr("href", item.URL)} target="_blank">${escape_html(getBaseUrl(item.URL))}</a> <p class="text-xs italic">Added: ${escape_html(fixDate(item.Date))}</p> <p class="text-xs italic">${escape_html(item.Tool)}</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pt-10"><button id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</button> <span class="text-xs font-semibold">${escape_html(lastCard)}/${escape_html(lenno)}</span> <button id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</button></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let categories = [
    ...new Set(data.data.map((d) => d.Category))
  ];
  categories = categories.toSpliced(0, 0, "All");
  let sortedData = data.data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  let colourdict = {
    "Tool": "#e64c5b",
    "Article": "#B1C29E",
    "Guide": "#789DBC"
  };
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(Object.entries(colourdict));
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="flex items-center justify-center gap-2"><span>Filter:</span> <select class="px-4 py-2 text-center bg-transparent border-2 border-black focus:outline-none focus:ring-0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cat = each_array[$$index];
    $$payload.out += `<option${attr("value", cat)}>${escape_html(cat)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div class="mt-5 flex gap-4 justify-center"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let [key, color] = each_array_1[$$index_1];
    $$payload.out += `<div class="flex items-center gap-2"><div class="w-3 h-3"${attr("style", `background-color: ${stringify(color)}`)}></div> <span>${escape_html(key)}</span></div>`;
  }
  $$payload.out += `<!--]--></div> <!---->`;
  {
    Linklist($$payload, { sortedData, pageLimit: 4, colourdict });
  }
  $$payload.out += `<!----> <div class="pt-10">This is an experiment in publishing from a <a href="https://docs.google.com/spreadsheets/d/10-Z3-zH1OVf8JQdKqB3GnKEIropYv1AT9-Mm8h536K8/edit?gid=0#gid=0" target="_blank">Google sheet</a>. This feed currently only gets updated when I update the entire site. I'm working on an rss version and a search bar. Everything will probably break.</div></div>`;
  pop();
}
export {
  _page as default
};
