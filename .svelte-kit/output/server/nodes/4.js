import * as universal from '../entries/pages/experiment/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experiment/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experiment/+page.js";
export const imports = ["_app/immutable/nodes/4.10DZH5YT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/KDNVALnk.js","_app/immutable/chunks/DZUBUkNQ.js","_app/immutable/chunks/D1n7riNJ.js"];
export const stylesheets = [];
export const fonts = [];
