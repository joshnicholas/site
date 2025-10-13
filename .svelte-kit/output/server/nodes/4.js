import * as universal from '../entries/pages/dash/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dash/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dash/+page.js";
export const imports = ["_app/immutable/nodes/4.DFLggCwm.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/vDhgsjCx.js","_app/immutable/chunks/BW4x_i8T.js"];
export const stylesheets = [];
export const fonts = [];
