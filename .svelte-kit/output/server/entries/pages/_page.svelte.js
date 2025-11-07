import { c as ensure_array_like, e as escape_html, b as bind_props, p as pop, a as push, f as copy_payload, g as assign_payload } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { shuffle, descending } from "d3-array";
import { timeParse } from "d3-time-format";
import { I as ImageSet } from "../../chunks/imageSet.js";
function Radio($$payload, $$props) {
  push();
  let options = $$props["options"];
  let sortBy = $$props["sortBy"];
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  const each_array = ensure_array_like(options);
  $$payload.out += `<div id="sortRow" class="flex justify-between text-l font-semibold px-10 svelte-16ej0y3" style="padding-top:0.5rem;"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<input class="sr-only mr-2 svelte-16ej0y3" type="radio"${attr("id", slugify(option))}${attr("checked", sortBy === option, true)}${attr("value", option)}> <label${attr("for", slugify(option))} class="svelte-16ej0y3">${escape_html(option)}</label>`;
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
  const options = ["Random", "Date", "Favs"];
  let removed = [
    "240725_sending-a-whoooooole_0.jpg",
    "bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.webp",
    "bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.jpg",
    "bafkreihj62fpumwbo6oyegyimtwqvh42xjchanogk6v5i7r2zg2jfb3npa.jpg"
  ];
  let feature = [
    "240711_last-full-day_0.jpg",
    "240714_escaping-the-hu_0.jpg",
    "240117-misty-sydney-cbd.jpg",
    "240719_pretty-sparkling-day_0.jpg",
    "uncle_e.jpg",
    "240425_its-getting-cold_0.jpg",
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
    "bafkreicmocizke57lx7km6s3jgq22bzyuwsnaplbqrsa5crgdykctmxeza.jpg",
    "bafkreictzaz4oeshhzwuyzbz55qtieuopnatijpqbknebn5nfsycyxaqry.jpg",
    "bafkreickngshyrlldojxnacpksidqihsmb4misoyecwauwpeckjttml6zi.jpg",
    "bafkreidcm772nxcggw75zkao4rvgdyg5s4or3227ijbkqv3utlt4a7fkqy.jpg",
    "bafkreidpxkyafq2q37ae66tumqdgyiymzxyipsk2amrq4gx2jphdg7ti5i.jpg",
    "bafkreig7mwkri7cii4lsf2d7b5y45ricnpyqsleun2p4tbjs3zwpxs6j7a.jpg",
    "bafkreihhzksklqyyz5dh444fwwuvbm5shpaaqyma7tszc43e4ji4jcgbiu.jpg",
    "bafkreifjqcy2tfifsiasvvfp5ti5mvdjiueuvov247xnbi5bkkc6abupwa.jpg"
  ];
  let filteredData = data.data.filter((item) => !removed.includes(item.img_path));
  function sorter(array, how) {
    if (how.toLowerCase() == "random") {
      return shuffle(array);
    } else if (how.toLowerCase() == "date") {
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
    $$payload2.out += `<div class="container mx-auto">`;
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
    $$payload2.out += `<!----></div> <!---->`;
    {
      ImageSet($$payload2, {
        pageLimit,
        datah: sorter(filteredData, sortBy)
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
