import { f as ensure_array_like, e as bind_props, c as pop, p as push, h as stringify, i as copy_payload, j as assign_payload } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { shuffle, ascending, descending } from "d3-array";
import { timeParse, timeFormat } from "d3-time-format";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Radio($$payload, $$props) {
  push();
  let options = $$props["options"];
  let sortBy = $$props["sortBy"];
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  const each_array = ensure_array_like(options);
  $$payload.out += `<div id="sortRow" class="flex justify-between text-l pb-5 svelte-pc4onl"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<input class="sr-only mr-5 svelte-pc4onl" type="radio"${attr("id", slugify(option))}${attr("checked", sortBy === option, true)}${attr("value", option)}> <label${attr("for", slugify(option))} class="svelte-pc4onl">${escape_html(option)}</label>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { options, sortBy });
  pop();
}
function Card($$payload, $$props) {
  push();
  let row = $$props["row"];
  let modalOpen = $$props["modalOpen"];
  let modalImage = $$props["modalImage"];
  let modalIndex = $$props["modalIndex"];
  let index = $$props["index"];
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  let i = Math.floor(Math.random() * colours.length);
  let dateParse = timeParse("%Y-%m-%d");
  let dateFormat = timeFormat("%d %b %Y");
  $$payload.out += `<div><img class="cardy svelte-1yq8s6w"${attr("id", index)}${attr("style", `border-color:${stringify(colours[i])}`)}${attr("src", `/images/${stringify(row["img_path"])}`)}${attr("alt", `/images${stringify(row["Title"])}`)}> <span class="text-l">${escape_html(row["Title"])}</span><br> <span class="text-xs">${escape_html(dateFormat(dateParse(row["Date"])))}</span></div>`;
  bind_props($$props, {
    row,
    modalOpen,
    modalImage,
    modalIndex,
    index
  });
  pop();
}
function ImageSet($$payload, $$props) {
  push();
  let isFirstPage, hasNextPage, showPrev, showNext;
  let datah = $$props["datah"];
  let pageLimit = $$props["pageLimit"];
  let containerWidth = $$props["containerWidth"];
  let firstImage = 0;
  let lastImage = firstImage + pageLimit;
  let modalOpen = false;
  let modalImage;
  let lenno;
  let rows;
  rows = datah.slice(firstImage, lastImage);
  isFirstPage = lastImage - pageLimit == 0 ? true : false;
  hasNextPage = lastImage >= lenno ? false : true;
  showPrev = isFirstPage ? "hidden" : "visible";
  showNext = !hasNextPage ? "hidden" : "visible";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(rows);
    $$payload2.out += `<div id="pagination" class="mx-auto flex items-center justify-between text-xl pb-5 pt-5"><div id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</div> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <div id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</div></div> <div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let row = each_array[index];
      Card($$payload2, {
        index,
        get row() {
          return row;
        },
        set row($$value) {
          row = $$value;
          $$settled = false;
        },
        get modalImage() {
          return modalImage;
        },
        set modalImage($$value) {
          modalImage = $$value;
          $$settled = false;
        },
        get modalOpen() {
          return modalOpen;
        },
        set modalOpen($$value) {
          modalOpen = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]--></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pt-10"><div id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</div> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <div id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { datah, pageLimit, containerWidth });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let dateparser = timeParse("%Y-%m-%d");
  let pageLimit = 4;
  let sortBy = void 0;
  sortBy = "Random";
  const options = ["Random", "Newest", "Oldest", "Favs"];
  let containerWidth = void 0;
  let feature = [
    "240711_last-full-day_0.jpg",
    "240714_escaping-the-hu_0.jpg",
    "240117-misty-sydney-cbd.jpg",
    "240719_pretty-sparkling-day_0.jpg",
    "uncle_e.jpg",
    "240425_its-getting-cold_0.jpg",
    "240725_sending-a-whoooooole_0.jpg",
    "240711_last-full-day_0.jpg",
    "40402_decided-to-challenge_counter.jpg",
    "230620-escaping-the-heat.jpeg",
    "231008_streetball.jpeg",
    "240124-sydney-ferry.jpg",
    "purple_head.jpg",
    "230613-ipoh-french-patisserie.jpeg",
    "230621-penang-town-hall.jpeg",
    "230623-the-hotel.jpeg",
    "240726_food-here-has_0.jpg",
    "240710_had-another-crack_0.jpg"
  ];
  function sorter(array, how) {
    if (how.toLowerCase() == "random") {
      return shuffle(array);
    } else if (how.toLowerCase() == "oldest") {
      let outty = array.sort(function(a, b) {
        return ascending(dateparser(a["Date"]), dateparser(b["Date"]));
      });
      return outty;
    } else if (how.toLowerCase() == "newest") {
      let outty = array.sort(function(a, b) {
        return descending(dateparser(a["Date"]), dateparser(b["Date"]));
      });
      return outty;
    } else if (how.toLowerCase() == "favs") {
      let keep = [...new Set(feature.map((d) => d))];
      return shuffle(array.filter((row) => keep.includes(row["img_path"])));
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="Biggest">`;
    Radio($$payload2, {
      options,
      get sortBy() {
        return sortBy;
      },
      set sortBy($$value) {
        sortBy = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <!---->`;
    {
      ImageSet($$payload2, {
        pageLimit,
        datah: sorter(data.data, sortBy),
        containerWidth
      });
    }
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
