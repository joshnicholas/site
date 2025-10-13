import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/7.enxeaf9o.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/DtnH6vMF.js","_app/immutable/chunks/D0pxVHQo.js","_app/immutable/chunks/Kj5y9EOd.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/vDhgsjCx.js"];
export const stylesheets = ["_app/immutable/assets/nav.BhJx0oSA.css"];
export const fonts = [];
