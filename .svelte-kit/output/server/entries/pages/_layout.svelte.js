import { b as attr_style, c as bind_props, h as head, g as slot } from "../../chunks/index.js";
import { f as fallback } from "../../chunks/context.js";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let upDown = fallback($$props["upDown"], "down");
    let csso = upDown.toLowerCase() == "down" ? "border-top: 2px solid var(--color-ui-accent);margin-top:1.25rem;padding-top:0.5rem;display:inline-block;" : "border-bottom: 2px solid var(--color-ui-accent);margin-bottom:1.25rem;padding-bottom:0.5rem;display:inline-block;";
    $$renderer2.push(`<div class="text-center"><div id="navblock" class="block"${attr_style(csso)}><ul id="navynav" class="space-x-6 flex justify-center text-l font-semibold"><li class="mr-0"><a href="/">scribbles</a></li> <li class="mr-0"><a href="http://joshnicholas.blog/" rel="me">blog</a></li> <li class="mr-0"><a href="/about">about</a></li> <li class="mr-0"><a href="https://www.theguardian.com/profile/josh-nicholas" target="_blank" rel="me">guardian⤴</a></li></ul></div></div>`);
    bind_props($$props, { upDown });
  });
}
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Josh Nicholas</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Josh Nicholas is a journalist and scribbler"/> <meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,data visualization,scribbles,scribbler,Guardian,Guardian Australia,The Guardian,2ser,The Wire,The Conversation"/>`);
  });
  $$renderer.push(`<div class="m-5"><div class="mx-auto max-w-[800px] min-h-[600px]"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  Nav($$renderer, {});
  $$renderer.push(`<!----></div></div>`);
}
export {
  _layout as default
};
