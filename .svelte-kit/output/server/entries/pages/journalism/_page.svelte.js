import { G as head, K as attr, O as ensure_array_like, y as derived } from "../../../chunks/index2.js";
import { R as Radio } from "../../../chunks/radio.js";
import { m as escape_html } from "../../../chunks/context.js";
new Set(
  `a an and are as at be but by for from has have he in is it its of on or
	s t that the their this to was were will with you your we they i us our
	not no do does did can could would should also more most other than then
	there these those his her which who what when where why how`.split(/\s+/)
);
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const selectedLinks = [
      "https://www.theguardian.com/australia-news/2025/mar/22/tourists-watercolours-and-the-sad-still-star-sketching-the-route-35-tram-showed-me-a-melbourne-i-had-never-really-noticed",
      "https://www.theguardian.com/news/datablog/2022/may/19/reality-cheque-we-taught-ai-artificial-intelligence-to-spot-the-most-used-props-australian-federal-election-2022",
      "https://www.theguardian.com/australia-news/ng-interactive/2021/may/17/who-owns-australia",
      "https://www.theguardian.com/news/ng-interactive/2024/apr/18/as-190000-households-wait-for-social-housing-application-numbers-are-only-increasing",
      "https://www.theguardian.com/news/ng-interactive/2025/jun/19/north-west-shelf-project-greenhouse-gas-emissions-burrup-peninsula-western-australia",
      "https://www.theguardian.com/environment/2025/sep/27/make-your-own-origami-bird-simple-guide-australian-bird-of-the-year-2025",
      "https://www.theguardian.com/sport/2023/jan/04/silly-point-or-square-leg-how-well-do-you-know-your-way-around-a-cricket-field",
      "https://www.theguardian.com/artanddesign/2026/jan/04/helen-wilding-artist-sketching-whole-melbourne-brunswick-street",
      "https://www.theguardian.com/news/ng-interactive/2024/jul/17/quiz-whats-getting-better-for-australians-today-and-whats-getting-worse",
      "https://www.theguardian.com/news/ng-interactive/2026/jun/08/australian-music-extinction-risk-data-listening-trends-aria-chart-history"
    ];
    const viewOptions = ["Select", "All"];
    let viewMode = "Select";
    let searchTerm = "";
    let page = 0;
    const pageSize = 10;
    let selectedRows = derived(() => selectedLinks.map((url) => data.data.find((row) => row.url === url)).filter(Boolean));
    let rows = derived(() => (viewMode === "All" ? data.data : selectedRows()).slice().sort((a, b) => new Date(b.published_date) - new Date(a.published_date)));
    let pageCount = derived(() => Math.max(1, Math.ceil(rows().length / pageSize)));
    let paged = derived(() => rows().slice(page * pageSize, page * pageSize + pageSize));
    function formatDate(dateString) {
      if (!dateString) return "";
      const d = new Date(dateString);
      if (isNaN(d)) return dateString;
      return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("2qnehn", $$renderer3, ($$renderer4) => {
        $$renderer4.push(`<meta name="description" content="Journalism"/>`);
      });
      $$renderer3.push(`<div>`);
      Radio($$renderer3, {
        options: viewOptions,
        get sortBy() {
          return viewMode;
        },
        set sortBy($$value) {
          viewMode = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="mb-10 mt-10 relative w-3/4 mx-auto"><input type="text"${attr("value", searchTerm)} placeholder="Search headline, tags, article text..." class="w-full px-4 py-2 pr-8 bg-transparent text-[color:var(--color-text)] placeholder-[color:var(--color-text)] focus:outline-none" style="border-bottom: 2px solid var(--color-ui-accent);"/> `);
      {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead></thead><tbody class="svelte-2qnehn"><!--[-->`);
      const each_array = ensure_array_like(paged());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let row = each_array[$$index];
        $$renderer3.push(`<tr style="border-bottom: 1px solid var(--image-border-color);" class="svelte-2qnehn"><td class="px-3 py-2">`);
        if (row.url) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<a${attr("href", row.url)} target="_blank" rel="noopener">${escape_html(row.headline)}</a>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`${escape_html(row.headline)}`);
        }
        $$renderer3.push(`<!--]--> `);
        if (row.Site) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<span>(${escape_html(row.Site)})</span>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></td><td class="px-3 py-2 whitespace-nowrap" style="color: #baa9d4">${escape_html(formatDate(row.published_date))}</td></tr>`);
      }
      $$renderer3.push(`<!--]-->`);
      if (rows().length === 0) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<tr class="svelte-2qnehn"><td class="px-3 py-4 text-center" colspan="2">${escape_html("No results found.")}</td></tr>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></tbody></table></div> `);
      if (pageCount() > 1) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<div class="mt-1.5 w-full flex items-center justify-between py-2.5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-2qnehn"${attr("disabled", page === 0, true)}>Prev</button> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-2qnehn"${attr("disabled", page >= pageCount() - 1, true)}>Next</button></div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div>`);
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
  _page as default
};
