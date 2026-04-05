import { p as pop, s as stringify, a as push } from "../../../../chunks/index.js";
import { I as ImageSet } from "../../../../chunks/imageSet.js";
import { shuffle, ascending, descending } from "d3-array";
import "bad-words";
import { a as attr } from "../../../../chunks/attributes.js";
/* empty css                                                        */
function _page($$payload, $$props) {
  push();
  let pageLimit = 4;
  let sortBy = void 0;
  sortBy = "Random";
  let { data } = $$props;
  let searchQuery = "";
  let hashes = data.data.map((d) => {
    const keywords = d["Keywords"];
    if (Array.isArray(keywords)) {
      return keywords;
    }
    if (typeof keywords === "string") {
      return keywords.replace(/\[|\]/g, "").split(",").map((d2) => d2.trim()).map((d2) => d2.replace(/'/g, ""));
    }
    return [];
  });
  [...new Set(hashes.flat())];
  let filteredResults = filterPosts([...data.data]);
  function filterPosts(arrayo, settoVar, searchQuery2, indexReady) {
    {
      return [...data.data];
    }
  }
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
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  let i = Math.floor(Math.random() * colours.length);
  $$payload.out += `<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="mb-6">I've run the scribbles through an image model to get keywords, captions and styles. This what the search bar is hooked up to.</div> <div class="mb-6">It's pretty good for searching for things like "still life" or "green".</div> <div class="mb-4 flex justify-center"><div class="relative w-full md:w-1/2"><input type="text"${attr("value", searchQuery)} placeholder="Search for something..." class="w-full px-4 py-2 rounded-none focus:outline-none focus:none bg-[#FADA7A] text-black placeholder-black"${attr("style", `border: 4px solid ${stringify(colours[i])};`)}> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <!---->`;
  {
    if (filteredResults.length > 0) {
      $$payload.out += "<!--[-->";
      ImageSet($$payload, {
        pageLimit,
        datah: sorter(filteredResults, sortBy)
      });
    } else {
      $$payload.out += "<!--[!-->";
      {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!----> <div class="mt-8 mb-10 text-xl pt-10"><a href="/tinkering" class="text-black">Back</a></div></div>`;
  pop();
}
export {
  _page as default
};
