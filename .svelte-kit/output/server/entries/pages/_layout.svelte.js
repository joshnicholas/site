import { d as bind_props, c as pop, p as push, h as head, e as slot } from "../../chunks/index.js";
/* empty css                                             */
import { f as fallback } from "../../chunks/utils.js";
import { a as attr } from "../../chunks/attributes.js";
function Nav($$payload, $$props) {
  push();
  let upDown = fallback($$props["upDown"], "down");
  let csso = upDown.toLowerCase() == "down" ? "border-top: 2px solid;margin-top:1.25rem;padding-top:0.5rem;" : "border-bottom: 2px solid;margin-bottom:1.25rem;padding-bottom:0.5rem;";
  $$payload.out += `<div id="navblock"${attr("style", csso)}><ul id="navynav" class="space-x-6 flex justify-start text-l font-semibold"><li class="mr-0"><a href="/" class="svelte-186xnan">scribbles</a></li> <li class="mr-0"><a href="/filter" class="svelte-186xnan">filter</a></li> <li class="mr-0"><a href="/about" class="svelte-186xnan">about</a></li> <li class="mr-0"><a href="https://www.theguardian.com/profile/josh-nicholas" target="_blank" rel="me" class="svelte-186xnan">guardian⤴</a></li></ul></div>`;
  bind_props($$props, { upDown });
  pop();
}
function _layout($$payload, $$props) {
  const prerender = false;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Josh Nicholas</title>`;
    $$payload2.out += `<meta name="description" content="Josh Nicholas is a journalist and scribbler"> <meta name="keywords" content="Josh Nicholas,data journalist,interactive journalist,interactive artist,visual journalist,data visualization,scribbles,scribbler,Guardian,Guardian Australia,The Guardian,2ser,The Wire,The Conversation">`;
  });
  $$payload.out += `<div class="m-5"><div class="mx-auto max-w-[800px] min-h-[600px]"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Nav($$payload, {});
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { prerender });
}
export {
  _layout as default
};
