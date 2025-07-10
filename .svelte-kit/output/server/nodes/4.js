import * as universal from '../entries/pages/experiment/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experiment/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experiment/+page.js";
export const imports = ["_app/immutable/nodes/4.CWQyAt7j.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DAhxSgRl.js","_app/immutable/chunks/Dcs9cFTW.js","_app/immutable/chunks/D_695iEC.js"];
export const stylesheets = [];
export const fonts = [];
