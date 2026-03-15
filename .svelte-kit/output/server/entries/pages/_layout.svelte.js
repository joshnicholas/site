import { b as bind_props, p as pop, a as push, h as head, d as slot } from "../../chunks/index.js";
/* empty css                                             */
import { f as fallback } from "../../chunks/utils.js";
import { a as attr } from "../../chunks/attributes.js";
function Nav($$payload, $$props) {
  push();
  let upDown = fallback($$props["upDown"], "down");
  let csso = upDown.toLowerCase() == "down" ? "border-top: 2px solid;margin-top:1.25rem;padding-top:0.5rem;display:inline-block;" : "border-bottom: 2px solid;margin-bottom:1.25rem;padding-bottom:0.5rem;display:inline-block;";
  $$payload.out += `<div class="text-center"><div id="navblock" class="block"${attr("style", csso)}><ul id="navynav" class="space-x-6 flex justify-center text-l font-semibold"><li class="mr-0"><a href="/" class="svelte-1lmmxt3">scribbles</a></li> <li class="mr-0"><a href="http://joshnicholas.blog/" rel="me" class="svelte-1lmmxt3">blog</a></li> <li class="mr-0"><a href="/about" class="svelte-1lmmxt3">about</a></li> <li class="mr-0"><a href="https://www.theguardian.com/profile/josh-nicholas" target="_blank" rel="me" class="svelte-1lmmxt3">guardian⤴</a></li></ul></div></div>`;
  bind_props($$props, { upDown });
  pop();
}
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Josh Nicholas</title>`;
    $$payload2.out += `<meta name="description" content="Josh Nicholas is a journalist and scribbler"> <meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,data visualization,scribbles,scribbler,Guardian,Guardian Australia,The Guardian,2ser,The Wire,The Conversation">`;
  });
  $$payload.out += `<div class="m-5"><div class="mx-auto max-w-[800px] min-h-[600px]"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Nav($$payload, {});
  $$payload.out += `<!----></div></div>`;
}
export {
  _layout as default
};
