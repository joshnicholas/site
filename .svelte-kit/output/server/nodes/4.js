import * as universal from '../entries/pages/dash/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dash/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dash/+page.js";
export const imports = ["_app/immutable/nodes/4.Dbt9lalq.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/btzKrme9.js","_app/immutable/chunks/FI1qfSYl.js"];
export const stylesheets = [];
export const fonts = [];
