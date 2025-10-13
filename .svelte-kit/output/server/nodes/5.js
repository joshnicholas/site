import * as universal from '../entries/pages/experiment/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experiment/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experiment/+page.js";
export const imports = ["_app/immutable/nodes/5.BMpxnHvS.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/vDhgsjCx.js"];
export const stylesheets = [];
export const fonts = [];
