import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.zWLWrL71.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/-0YnnR2x.js","_app/immutable/chunks/28udYh4u.js","_app/immutable/chunks/Dg16k3ZX.js","_app/immutable/chunks/D6KABlUU.js"];
export const stylesheets = ["_app/immutable/assets/3.CnVjr-KN.css"];
export const fonts = [];
