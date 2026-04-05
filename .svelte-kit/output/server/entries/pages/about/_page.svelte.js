import { e as ensure_array_like, a as attr, c as bind_props, b as attr_style, s as stringify } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function RssFeed($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { url, maxN = 5, filter = [], loading = true } = $$props;
    let feedItems = [];
    $$renderer2.push(`<div class="rss-feed svelte-ssc8xc">`);
    if (feedItems.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<ul class="list-disc pl-10 pb-10"><!--[-->`);
      const each_array = ensure_array_like(feedItems);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<li class="pt-3"><a${attr("href", item.link)} target="_blank" rel="noopener noreferrer">${escape_html(item.title)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { loading });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let rssFeedLoading = true;
    let borderColor = "#FF8C68";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="block max-w-3xl display:block"><div class="float-left lg:w-1/3 prose mr-0 sm:mr-2 mb-1 sm:mb-0"><img alt="about image" srcset="/blueyellow200.jpg 200w, /blueyellow340.jpg 380w" sizes="(max-width: 600px) 380px,
         380px" class="mx-auto mb-2.5"${attr_style(`border-color:${stringify(borderColor)};border-width:var(--image-border-width);border-style:solid;`)}/></div></div> <div><br/> <br/> <p class="mt-2.5">Ello.</p><br/> <p>My name is <span class="font-semibold">Josh</span>. I'm a scribbler and <a href="https://www.theguardian.com/profile/josh-nicholas" target="_blank" rel="me">journalist</a>.</p><br/> <p>This is a collection of apps, including a <a href="http://joshnicholas.blog/" rel="me">blog</a> and a collection of <a href="https://joshnicholas.com/" rel="me">scribbles</a>. It's all a big experiment so things will randomly break.</p><br/> <p>I'm aiming to run an update script about once a week. I post more regularly on <a href="https://www.instagram.com/joshcnicholas" target="_blank" rel="me">insta</a>. You can follow my posts using rss <a href="https://joshnicholas.blog/feed">here</a>.<br/></p> <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div> <br/> <p>Some current projects:</p> <ul class="list-disc pl-10 pb-10"><li class="pt-3">Wynne prize finalist <a href="https://wynne-two.vercel.app/">gallery</a></li> <li class="pt-3">2025 Audio advent <a href="https://audio-advent.vercel.app/">calendar</a></li> <li class="pt-3">Four day workweek <a href="https://joshnicholas.github.io/four-day-calculator/">calculator</a></li> <li class="pt-3">Melbourne <a href="https://joshnicholas.github.io/oz_weather_scraper/">weather dashboard</a></li> <li class="pt-3">Dashboard of <a href="https://joshnicholas.github.io/dash/">Australian news top stories</a></li> <li class="pt-3">Filtering images <a href="/tinkering/filter">by keyword</a></li> <li class="pt-3">Filtering images <a href="/tinkering/colourmatch">by colour</a></li></ul></div> `);
      if (!rssFeedLoading) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<p>Some recent stories:</p>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      RssFeed($$renderer3, {
        url: "https://www.theguardian.com/profile/josh-nicholas/rss",
        maxN: 5,
        filter: ["The Crunch:", "australia-politics-live"],
        get loading() {
          return rssFeedLoading;
        },
        set loading($$value) {
          rssFeedLoading = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div></div>`);
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
