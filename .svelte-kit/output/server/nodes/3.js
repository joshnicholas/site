import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BLTqjwjJ.js","_app/immutable/chunks/s8Df0u34.js","_app/immutable/chunks/CQ5YOXVz.js","_app/immutable/chunks/h-EOibB2.js"];
export const stylesheets = [];
export const fonts = [];
