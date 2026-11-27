import * as universal from '../entries/pages/rmit/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rmit/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/rmit/+page.js";
export const imports = ["_app/immutable/nodes/6.NV819Eqb.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/D6KABlUU.js"];
export const stylesheets = ["_app/immutable/assets/6.B5B46cy2.css"];
export const fonts = [];
