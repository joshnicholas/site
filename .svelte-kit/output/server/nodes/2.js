import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CrnfjyWv.js","_app/immutable/chunks/s8Df0u34.js","_app/immutable/chunks/CQ5YOXVz.js","_app/immutable/chunks/DZOkYFiG.js","_app/immutable/chunks/h-EOibB2.js","_app/immutable/chunks/PZg-WTvg.js","_app/immutable/chunks/B2msKv4s.js","_app/immutable/chunks/DkC63Y7W.js"];
export const stylesheets = ["_app/immutable/assets/2.C1uWe8zc.css"];
export const fonts = [];
