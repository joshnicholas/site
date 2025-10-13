import { h as head } from "../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Redirecting to Dashboard...</title>`;
    $$payload2.out += `<meta http-equiv="refresh" content="0; url=https://joshnicholas.github.io/dash/">`;
  });
  $$payload.out += `<div class="p-8"><p class="mb-4">You should be redirected automatically.</p> <a href="https://joshnicholas.github.io/dash/" class="text-blue-600 hover:underline">Click here if you aren't</a></div>`;
}
export {
  _page as default
};
