import { e as ensure_array_like, a as escape_html, s as stringify, p as pop, b as push } from "../../../chunks/index2.js";
/* empty css                                                */
import { a as attr } from "../../../chunks/attributes.js";
/* empty css                                                     */
function _page($$payload, $$props) {
  push();
  function getBaseUrl(url) {
    try {
      const urlObj = new URL(url);
      let hostname = urlObj.hostname;
      if (hostname.startsWith("www.")) {
        hostname = hostname.substring(4);
      }
      const parts = hostname.split(".");
      if (parts.length >= 2) {
        return parts.slice(-2).join(".");
      }
      return hostname;
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  }
  let { data } = $$props;
  const sortedData = data.data.slice().sort((a, b) => new Date(b.Date) - new Date(a.Date));
  function fixDate(thingo) {
    const date = new Date(thingo);
    return `${date.getDate()} ${date.toLocaleDateString("en-US", { month: "short" })} ${date.getFullYear()}`;
  }
  let dicto = {
    "Tool": "#B1C29E",
    "Article": "#789DBC",
    "Misc": "#a389c4"
  };
  const each_array = ensure_array_like(sortedData);
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<p>${escape_html(item.Tool)}</p> <div${attr("class", `pt-6 [&:not(:last-child)]:border-b border-black pb-6 max-w-[600px] mx-auto bg-[${stringify(dicto[item.Tool])}]`)}>`;
    if (item.Title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<h2 class="text-lg bold mb-4">${escape_html(item.Title)}</h2>`;
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
    $$payload.out += `<!--]--> <a${attr("href", item.URL)} target="_blank">${escape_html(getBaseUrl(item.URL))}</a> <p class="text-xs italic">${escape_html(fixDate(item.Date))}</p> <p class="text-xs italic">${escape_html(item.Tool)}</p></div>`;
  }
  $$payload.out += `<!--]--> <div class="pt-10">This is an experiment in publishing from a <a href="https://docs.google.com/spreadsheets/d/10-Z3-zH1OVf8JQdKqB3GnKEIropYv1AT9-Mm8h536K8/edit?gid=0#gid=0" target="_blank">Google sheet</a>. This feed currently only gets updated when I update the entire site. I'm working on an rss version.</div></div>`;
  pop();
}
export {
  _page as default
};
