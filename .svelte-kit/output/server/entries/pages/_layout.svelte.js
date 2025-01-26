import { d as slot, e as bind_props } from "../../chunks/index.js";
import "clsx";
function Nav($$payload) {
  $$payload.out += `<div id="navblock" class="mt-5 svelte-jj161v"><ul id="navynav" class="space-x-6 flex justify-start text-xl mt-2 font-semibold"><li class="mr-0"><a href="/" class="svelte-jj161v">scribbles</a></li> <li class="mr-0"><a href="/about" class="svelte-jj161v">about</a></li></ul></div>`;
}
function _layout($$payload, $$props) {
  const prerender = false;
  $$payload.out += `<div class="m-5"><div class="mx-auto max-w-[800px] min-h-[600px]"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Nav($$payload);
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { prerender });
}
export {
  _layout as default
};
