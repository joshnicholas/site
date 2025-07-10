import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.DNhyJ-4x.js","_app/immutable/chunks/DAhxSgRl.js","_app/immutable/chunks/Dcs9cFTW.js","_app/immutable/chunks/Y-FhYAqm.js","_app/immutable/chunks/BJWDafmj.js","_app/immutable/chunks/DK4A_gdK.js","_app/immutable/chunks/B9QI8j-U.js"];
export const stylesheets = [];
export const fonts = [];
