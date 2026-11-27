import { z as attr_style, K as attr, N as stringify, O as ensure_array_like, F as bind_props, y as derived } from "../../chunks/index2.js";
import { R as Radio } from "../../chunks/radio.js";
import { descending, shuffle } from "d3-array";
import { timeParse, timeFormat } from "d3-time-format";
import rough from "roughjs";
const borderColors = ["#ffb6c5", "#ffbb95", "#f2c877", "#c5d882", "#91e2ad", "#75e1de", "#91d8ff", "#c3c9ff", "#efbcf0"];
function getRandomBorderColor() {
  return borderColors[Math.floor(Math.random() * borderColors.length)];
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { row, index } = $$props;
    let borderColor = getRandomBorderColor();
    timeParse("%Y-%m-%d");
    timeFormat("%b %Y");
    const SKETCH_ROUGHNESS = 3;
    const SKETCH_BOWING = 1.5;
    const SKETCH_STROKE_WIDTH = 5;
    const SKETCH_MAX_OFFSET = 3;
    const FRAME_MARGIN = 20;
    const w = row["Width"];
    const h = row["Height"];
    const outerW = w + FRAME_MARGIN * 2;
    const outerH = h + FRAME_MARGIN * 2;
    const photoLeftPct = FRAME_MARGIN / outerW * 100;
    const photoTopPct = FRAME_MARGIN / outerH * 100;
    const photoWidthPct = w / outerW * 100;
    const photoHeightPct = h / outerH * 100;
    function pickPassCount() {
      const r = Math.random();
      if (r < 0.5) return 1;
      if (r < 0.8) return 2;
      return 3;
    }
    const passCount = pickPassCount();
    const generator = rough.generator();
    const sketchyPaths = [];
    for (let i = 0; i < passCount; i++) {
      const sketchyRect = generator.rectangle(-5 / 2, -5 / 2, w + SKETCH_STROKE_WIDTH, h + SKETCH_STROKE_WIDTH, {
        roughness: SKETCH_ROUGHNESS,
        bowing: SKETCH_BOWING,
        maxRandomnessOffset: SKETCH_MAX_OFFSET,
        stroke: "currentColor",
        strokeWidth: SKETCH_STROKE_WIDTH,
        disableMultiStroke: true
      });
      sketchyPaths.push(...generator.toPaths(sketchyRect));
    }
    $$renderer2.push(`<button type="button" class="border-0 p-0 bg-transparent cursor-pointer w-full block relative"${attr_style(`color:${stringify(borderColor)};aspect-ratio:${stringify(outerW)}/${stringify(outerH)};`)}><img class="cardy block svelte-1u0xoi6"${attr("id", index)}${attr("width", w)}${attr("height", h)}${attr_style(`position:absolute;left:${stringify(photoLeftPct)}%;top:${stringify(photoTopPct)}%;width:${stringify(photoWidthPct)}%;height:${stringify(photoHeightPct)}%;`)}${attr("src", `/images/${stringify(row["webp_path"])}`)}${attr("alt", row["Title"])} decoding="async"${attr("fetchpriority", index < 3 ? "high" : "auto")}/> <svg class="sketchy-border svelte-1u0xoi6"${attr("viewBox", `${stringify(-20)} ${stringify(-20)} ${stringify(outerW)} ${stringify(outerH)}`)} preserveAspectRatio="none" aria-hidden="true"><!--[-->`);
    const each_array = ensure_array_like(sketchyPaths);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let p = each_array[$$index];
      $$renderer2.push(`<path${attr("d", p.d)}${attr("stroke", p.stroke)}${attr("stroke-width", p.strokeWidth)}${attr("fill", p.fill ?? "none")} stroke-linecap="round" stroke-linejoin="round"></path>`);
    }
    $$renderer2.push(`<!--]--></svg> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></button>`);
  });
}
function IndexSlider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      sortedData,
      selectedIndex = 0,
      increment = 12,
      indexBelow = false,
      scrolly = null
    } = $$props;
    const minIndex = derived(() => 0);
    const maxIndex = derived(() => sortedData.length - 1);
    const indexPosition = derived(() => (selectedIndex - minIndex()) / (maxIndex() - minIndex()) * 100);
    const SKETCH_ROUGHNESS = 1.5;
    const SKETCH_BOWING = 1;
    const SKETCH_STROKE_WIDTH = 3;
    const SKETCH_MAX_OFFSET = 2.5;
    const SKETCH_PASSES = 1;
    const SKETCH_WAVES = 6;
    const TRACK_H = 48;
    const TRACK_MARGIN = 14;
    const THUMB_RADIUS = 9;
    const REFERENCE_W = 1e3;
    const SKETCH_SEED = 42;
    const generator = rough.generator();
    const allPasses = (() => {
      const paths = [];
      const points = [];
      for (let i = 0; i <= SKETCH_WAVES; i++) {
        points.push([
          TRACK_MARGIN + (REFERENCE_W - TRACK_MARGIN * 2) * i / SKETCH_WAVES,
          TRACK_H / 2
        ]);
      }
      for (let i = 0; i < SKETCH_PASSES; i++) {
        const path = generator.linearPath(points, {
          roughness: SKETCH_ROUGHNESS,
          bowing: SKETCH_BOWING,
          maxRandomnessOffset: SKETCH_MAX_OFFSET,
          stroke: "currentColor",
          strokeWidth: SKETCH_STROKE_WIDTH,
          disableMultiStroke: true,
          preserveVertices: true,
          // keeps segment joints connected (no gaps between waves)
          seed: SKETCH_SEED + i
        });
        paths.push(...generator.toPaths(path));
      }
      return paths;
    })();
    let thumbY = TRACK_H / 2;
    const marginPct = TRACK_MARGIN / REFERENCE_W * 100;
    const thumbLeftPct = derived(() => marginPct + indexPosition() / 100 * (100 - marginPct * 2));
    $$renderer2.push(`<div class="mt-2.5 w-full flex items-center gap-2 py-5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1rgccp9"${attr("disabled", selectedIndex <= minIndex(), true)}>Prev</button> <div class="flex-1 relative px-6 slider-track-wrap svelte-1rgccp9"><svg class="sketchy-track svelte-1rgccp9"${attr("viewBox", `0 0 ${stringify(REFERENCE_W)} ${stringify(TRACK_H)}`)} preserveAspectRatio="none" aria-hidden="true">`);
    if (allPasses.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<path${attr("d", allPasses[0].d)}${attr("stroke", allPasses[0].stroke)}${attr("stroke-width", allPasses[0].strokeWidth)} fill="none" stroke-linecap="round" stroke-linejoin="round"></path><!--[-->`);
      const each_array = ensure_array_like(allPasses.slice(1));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let p = each_array[i];
        $$renderer2.push(`<path${attr("d", p.d)}${attr("stroke", p.stroke)}${attr("stroke-width", p.strokeWidth)}${attr("fill", p.fill ?? "none")} stroke-linecap="round" stroke-linejoin="round"></path>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></svg> <div class="thumb-bounds svelte-1rgccp9"><div class="sketchy-thumb svelte-1rgccp9"${attr_style(`left:${stringify(thumbLeftPct())}%;top:${stringify(thumbY)}px;width:${stringify(THUMB_RADIUS * 2)}px;height:${stringify(THUMB_RADIUS * 2)}px;margin-left:-${stringify(THUMB_RADIUS)}px;margin-top:-${stringify(THUMB_RADIUS)}px;`)}></div></div> <input type="range" class="index-slider w-full cursor-pointer bg-transparent appearance-none svelte-1rgccp9"${attr("min", minIndex())}${attr("max", maxIndex())} step="1"${attr("value", selectedIndex)}/></div> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1rgccp9"${attr("disabled", selectedIndex >= maxIndex(), true)}>Next</button></div>`);
    bind_props($$props, { selectedIndex });
  });
}
function ImageSet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { datah, pageLimit, isSortTime = false } = $$props;
    let firstImage = 0;
    Math.min(pageLimit, datah?.length ?? 0);
    datah?.length ?? 0;
    let rows = datah ? datah.slice(0, Math.min(pageLimit, datah.length)) : [];
    let scrolly = void 0;
    let currentIndex = 0;
    const columns = derived(() => [
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 0),
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 1),
      rows.map((row, i) => ({ row, i })).filter((_, i) => i % 3 === 2)
    ]);
    let columnOffsets = [0, 0, 0];
    let clusterClearance = 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div></div> <div class="container mx-auto pb-2.5">`);
      IndexSlider($$renderer3, {
        sortedData: datah,
        scrolly,
        get selectedIndex() {
          return currentIndex;
        },
        set selectedIndex($$value) {
          currentIndex = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="container mx-auto md:hidden"><!--[-->`);
      const each_array = ensure_array_like(rows);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let row = each_array[index];
        $$renderer3.push(`<div class="mb-5">`);
        Card($$renderer3, {
          index,
          row,
          currentIndex,
          selected: currentIndex === firstImage + index
        });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="container mx-auto hidden md:flex gap-5 items-center"${attr_style(`padding-top: ${stringify(clusterClearance)}px; padding-bottom: ${stringify(clusterClearance)}px`)}><!--[-->`);
      const each_array_1 = ensure_array_like(columns());
      for (let c = 0, $$length = each_array_1.length; c < $$length; c++) {
        let col = each_array_1[c];
        $$renderer3.push(`<div class="flex-1"${attr_style(`transform: translateY(${stringify(columnOffsets[c])}px)`)}><!--[-->`);
        const each_array_2 = ensure_array_like(col);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let { row, i } = each_array_2[$$index_1];
          $$renderer3.push(`<div class="mb-5">`);
          Card($$renderer3, {
            index: i,
            row,
            currentIndex,
            selected: currentIndex === firstImage + i
          });
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="container mx-auto pb-2.5"><div class="mt-1.5 w-full flex items-center justify-between py-2.5"><button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1fopwo1"${attr("disabled", currentIndex <= 0, true)}>Prev</button> <button class="cursor-pointer hover:opacity-70 select-none font-medium svelte-1fopwo1"${attr("disabled", currentIndex >= datah.length - 1, true)}>Next</button></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, imageDataArray } = $$props;
    let dateparser = timeParse("%Y-%m-%d");
    let pageLimit = 9;
    let sortBy = void 0;
    sortBy = "Random";
    const options = ["Random", "Date", "Select"];
    let removed = [
      "240725_sending-a-whoooooole_0.jpg",
      "bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.webp",
      "bafkreiarmnd426qm2jj2cpsyafegwkunnq3qu2ugs2nqpihzlp7272hcm4.jpg",
      "bafkreihj62fpumwbo6oyegyimtwqvh42xjchanogk6v5i7r2zg2jfb3npa.jpg",
      "bafkreig6xiy7mjocxtdfwanw7k3jskg5lr7dvrmu7mykcdy7vnucgifur4.webp",
      "bafkreig6xiy7mjocxtdfwanw7k3jskg5lr7dvrmu7mykcdy7vnucgifur4.jpg",
      "http://localhost:5173/images/rgxummhtp7miwr2h2z75gnego2a8kae5ivcr1odghybefp0yub9fip237pc.webp",
      "http://localhost:5173/images/oz45njtul6s74csqfx69qqwfvyn90dost48ta9yx6wv58wtr3w4mrzfa1vu.webp",
      "http://localhost:5173/images/dk3nrr4vba8fcuj8w8tbe2gxe71876roi2dvr1hwnvdqh6ddgx1am9fi3wg.webp"
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
      "bafkreifjqcy2tfifsiasvvfp5ti5mvdjiueuvov247xnbi5bkkc6abupwa.jpg",
      "oz45njtul6s74csqfx69qqwfvyn90dost48ta9yx6wv58wtr3w4mrzfa1vu.jpg",
      "60h4n9f5endq6naxrkeqxnslmpb86oii8rd0z9flklsqkipwtk60sogy2g1.jpg"
    ];
    let filteredData = derived(() => data.data.filter((item) => !removed.includes(item.img_path)));
    function sorter(array, how) {
      if (how.toLowerCase() == "random") {
        return [...array];
      } else if (how.toLowerCase() == "date") {
        let outty = array.sort(function(a, b) {
          return descending(dateparser(a["Date"]), dateparser(b["Date"]));
        });
        return outty;
      } else if (how.toLowerCase() == "select") {
        let keep = [...new Set(feature.map((d) => d))];
        return shuffle(array.filter((row) => keep.includes(row["img_path"])));
      }
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="container mx-auto">`);
      Radio($$renderer3, {
        options,
        get sortBy() {
          return sortBy;
        },
        set sortBy($$value) {
          sortBy = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <!---->`);
      {
        ImageSet($$renderer3, { pageLimit, datah: sorter(filteredData(), sortBy) });
      }
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
