import { G as head, z as attr_style, N as stringify } from "../../../chunks/index2.js";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer) {
  let backgroundColor = "#4E5E6E";
  let linkColor = "#FFCBAD";
  let videoBorderColor = "#FFCBAD";
  head("cwls5q", $$renderer, ($$renderer2) => {
    $$renderer2.push(`${html(`<style>body { background-color: ${backgroundColor} !important; --color-link: ${linkColor}; --color-ui-accent: ${linkColor}; --image-border-color: ${linkColor}; }</style>`)}`);
  });
  $$renderer.push(`<div class="mx-auto max-w-[800px] min-h-[425px]"><div class="block max-w-3xl display:block"><div class="float-left lg:w-1/3 prose mr-0 sm:mr-2 mb-1 sm:mb-0"><video src="/videos/profile.mp4" width="480" height="480" class="mx-auto mb-2.5 about-video svelte-cwls5q"${attr_style(`border-color:${stringify(videoBorderColor)};border-width:var(--video-border-width, var(--image-border-width));border-style:solid;`)} autoplay="" muted="" loop="" playsinline=""></video></div></div> <div><p class="mt-2.5">Ello.</p><br/> <p>My name is <span class="font-semibold">Josh</span>. I'm a scribbler and <a href="https://www.abc.net.au/news/josh-nicholas/107294250" target="_blank" rel="me">journalist</a>.</p><br/> <p>This is a loose collection of apps and things will randomly break.</p><br/> <ul class="list-disc list-inside mb-5"><li><a href="https://links.joshnicholas.com/rss" rel="me">links rss</a></li> <li><a rel="me" href="https://joshnicholas.blog/feed">blog rss</a></li></ul> <div style="clear: both; display: block; visibility: visible; width: 100%; height: 0; content: ''; overflow: hidden;"></div> <p>Recent projects:</p> <ul class="list-disc pl-10 pb-10"><li class="pt-3"><a href="https://joshnicholas.github.io/drawing_values_checker/">Value checker</a> for drawing/painting</li> <li class="pt-3">Wynne prize finalist <a href="https://wynne-two.vercel.app/">gallery</a></li> <li class="pt-3">2025 Audio advent <a href="https://audio-advent.vercel.app/">calendar</a></li> <li class="pt-3">Four day workweek <a href="https://joshnicholas.github.io/four-day-calculator/">calculator</a></li> <li class="pt-3">Melbourne <a href="https://joshnicholas.github.io/oz_weather_scraper/">weather dashboard</a></li> <li class="pt-3">Dashboard of <a href="https://joshnicholas.github.io/dash/">Australian news top stories</a></li></ul></div></div>`);
}
export {
  _page as default
};
