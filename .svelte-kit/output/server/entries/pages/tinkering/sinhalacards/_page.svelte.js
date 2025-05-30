import { p as pop, b as push, e as ensure_array_like, s as stringify } from "../../../../chunks/index2.js";
import "clsx";
/* empty css                                                   */
import { a as attr } from "../../../../chunks/attributes.js";
/* empty css                                                        */
function Vocabcard($$payload, $$props) {
  push();
  let { $$slots, $$events, ...props } = $$props;
  console.log(props.item);
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  Math.floor(Math.random() * colours.length);
  const each_array = ensure_array_like(data.data);
  $$payload.out += `<!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    Vocabcard($$payload, { item, colours, i });
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mx-auto max-w-[800px] min-h-[425px]"><div class="flex justify-center mb-8 pt-8"><div class="relative inline-flex items-center bg-gray-200 rounded-full p-1"><button${attr("class", `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${stringify("bg-white text-gray-900 shadow-sm")}`)}>English</button> <button${attr("class", `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${stringify("text-gray-600")}`)}>Sinhala</button></div></div> <div class="mt-8 mb-10 text-xl pt-10"><a href="/tinkering" class="text-black">Back</a></div></div>`;
  pop();
}
export {
  _page as default
};
