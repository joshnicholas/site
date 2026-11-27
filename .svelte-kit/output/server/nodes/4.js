import * as universal from '../entries/pages/dash/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dash/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dash/+page.js";
export const imports = ["_app/immutable/nodes/4.CCfitjnz.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/BL8Jwi61.js","_app/immutable/chunks/28udYh4u.js"];
export const stylesheets = [];
export const fonts = [];
