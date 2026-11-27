import { O as ensure_array_like, K as attr, F as bind_props } from "./index2.js";
import { m as escape_html } from "./context.js";
function Radio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let options = $$props["options"];
    let sortBy = $$props["sortBy"];
    const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
    $$renderer2.push(`<div id="sortRow" class="flex justify-between text-l font-semibold px-10 svelte-maauej" style="padding-top:0.5rem;"><!--[-->`);
    const each_array = ensure_array_like(
      // $:console.log(userSelected)
      options
    );
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let option = each_array[$$index];
      $$renderer2.push(`<input class="sr-only mr-2 svelte-maauej" type="radio"${attr("id", slugify(option))}${attr("checked", sortBy === option, true)}${attr("value", option)}/> <label${attr("for", slugify(option))} class="svelte-maauej">${escape_html(option)}</label>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { options, sortBy });
  });
}
export {
  Radio as R
};
