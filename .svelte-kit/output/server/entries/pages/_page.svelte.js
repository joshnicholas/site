import { e as ensure_array_like, a as escape_html, c as bind_props, p as pop, b as push, f as copy_payload, g as assign_payload } from "../../chunks/index2.js";
import { a as attr } from "../../chunks/attributes.js";
import { shuffle, ascending, descending } from "d3-array";
import { timeParse } from "d3-time-format";
import { I as ImageSet } from "../../chunks/imageSet.js";
function Radio($$payload, $$props) {
  push();
  let options = $$props["options"];
  let sortBy = $$props["sortBy"];
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  const each_array = ensure_array_like(options);
  $$payload.out += `<div id="sortRow" class="flex justify-between text-l font-semibold svelte-1r6hi8v" style="padding-bottom:0.5rem;"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<input class="sr-only mr-2 svelte-1r6hi8v" type="radio"${attr("id", slugify(option))}${attr("checked", sortBy === option, true)}${attr("value", option)}> <label${attr("for", slugify(option))} class="svelte-1r6hi8v">${escape_html(option)}</label>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { options, sortBy });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data, imageDataArray } = $$props;
  let dateparser = timeParse("%Y-%m-%d");
  let pageLimit = 4;
  let sortBy = void 0;
  sortBy = "Random";
  const options = ["Random", "Newest", "Oldest", "Favs"];
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
    "240710_had-another-crack_0.jpg",
    "bafkreiebe4cdzj5eoovpgpf25yri6a3gcbe3pz4bepvd6ibquy22ihyb2u.jpg",
    "bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.jpg",
    "bafkreiamgekie2fpvpehuynwfaic3ck5jbvnubebls37gmivgnrcew2mdu.jpg",
    "bafkreib64zsamf3z2s23bmrigo457riaqgpzj7zvihwbwjl5yvftljo6zq.jpg",
    "bafkreicmocizke57lx7km6s3jgq22bzyuwsnaplbqrsa5crgdykctmxeza.jpg"
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
  console.log("Hi!");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
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
        datah: sorter(data.data, sortBy)
      });
    }
    $$payload2.out += `<!---->`;
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
