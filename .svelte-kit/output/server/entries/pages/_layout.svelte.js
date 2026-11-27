import { z as attr_style, F as bind_props, G as head, J as slot } from "../../chunks/index2.js";
import { k as fallback } from "../../chunks/context.js";
import { h as html } from "../../chunks/html.js";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let upDown = fallback($$props["upDown"], "down");
    let csso = upDown.toLowerCase() == "down" ? "border-top: 2px solid var(--color-ui-accent);margin-top:1.25rem;padding-top:0.5rem;display:inline-block;" : "border-bottom: 2px solid var(--color-ui-accent);margin-bottom:1.25rem;padding-bottom:0.5rem;display:inline-block;";
    $$renderer2.push(`<div class="nav-wrap svelte-uoct51"><div class="navblock svelte-uoct51"${attr_style(csso)}><ul class="navlinks svelte-uoct51"><li><a rel="me" href="/">scribbles</a></li> <li><a href="https://links.joshnicholas.com/">links</a></li> <li><a rel="me" href="http://joshnicholas.blog/">blog</a></li> <li><a rel="me" href="/journalism">journalism</a></li> <li><a rel="me" href="/about">about</a></li></ul></div></div>`);
    bind_props($$props, { upDown });
  });
}
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Josh Nicholas</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Josh Nicholas is a journalist and scribbler"/> <meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,data visualization,scribbles,scribbler,Guardian,Guardian Australia,The Guardian,2ser,The Wire,The Conversation"/> ${html(`<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://joshnicholas.com/#person",
      "name": "Josh Nicholas",
      "url": "https://joshnicholas.com",
      "jobTitle": "Journalist",
      "worksFor": {
        "@type": "Organization",
        "name": "ABC News",
        "url": "https://www.abc.net.au/news"
      },
      "sameAs": [
        "https://joshnicholas.com",
        "https://joshnicholas.blog",
        "https://www.abc.net.au/news/josh-nicholas/107294250",
        "https://www.instagram.com/joshcnicholas/"
      ]
    })}<\/script>`)}`);
  });
  $$renderer.push(`<div class="m-5"><div class="mx-auto max-w-[800px] min-h-[calc(100dvh-2.5rem)] flex flex-col"><div class="flex-1"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div> `);
  Nav($$renderer, {});
  $$renderer.push(`<!----></div></div>`);
}
export {
  _layout as default
};
