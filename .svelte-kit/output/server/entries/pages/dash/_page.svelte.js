import { h as head } from "../../../chunks/index.js";
function _page($$renderer) {
  head("1b9je9t", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Redirecting to Dashboard...</title>`);
    });
    $$renderer2.push(`<meta http-equiv="refresh" content="0; url=https://joshnicholas.github.io/dash/"/>`);
  });
  $$renderer.push(`<div class="p-8"><p class="mb-4">You should be redirected automatically.</p> <a href="https://joshnicholas.github.io/dash/" class="text-blue-600 hover:underline">Click here if you aren't</a></div>`);
}
export {
  _page as default
};
