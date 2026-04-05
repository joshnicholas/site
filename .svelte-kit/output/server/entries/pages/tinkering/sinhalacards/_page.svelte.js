import { e as ensure_array_like, f as attr_class, s as stringify } from "../../../../chunks/index.js";
import "clsx";
/* empty css                                                        */
function Vocabcard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    console.log(props.item);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
    Math.floor(Math.random() * colours.length);
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(data.data);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      Vocabcard($$renderer2, { item, colours, i });
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[800px] min-h-[425px]"><div class="flex justify-center mb-8 pt-8"><div class="relative inline-flex items-center bg-gray-200 rounded-full p-1"><button${attr_class(`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${stringify("bg-white text-gray-900 shadow-sm")}`)}>English</button> <button${attr_class(`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${stringify("text-gray-600")}`)}>Sinhala</button></div></div> <div class="mt-8 mb-10 text-xl pt-10"><a href="/tinkering" class="text-black">Back</a></div></div>`);
  });
}
export {
  _page as default
};
