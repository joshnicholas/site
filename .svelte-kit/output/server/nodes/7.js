import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/7.CvfKsZJr.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/bP8ZzjbB.js","_app/immutable/chunks/Cm_b2-pt.js","_app/immutable/chunks/CtWVPDyD.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/B35-YkL_.js"];
export const stylesheets = ["_app/immutable/assets/nav.BhJx0oSA.css"];
export const fonts = [];
