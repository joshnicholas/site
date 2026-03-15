import * as universal from '../entries/pages/experiment/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experiment/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experiment/+page.js";
export const imports = ["_app/immutable/nodes/5.vKqaKp5L.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/btzKrme9.js"];
export const stylesheets = [];
export const fonts = [];
