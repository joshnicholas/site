import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/6.D3OZnbuO.js","_app/immutable/chunks/DAhxSgRl.js","_app/immutable/chunks/Dcs9cFTW.js","_app/immutable/chunks/Y-FhYAqm.js","_app/immutable/chunks/BJWDafmj.js","_app/immutable/chunks/DK4A_gdK.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/D_695iEC.js"];
export const stylesheets = ["_app/immutable/assets/nav.C7DIyg2k.css"];
export const fonts = [];
