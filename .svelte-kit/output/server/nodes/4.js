import * as universal from '../entries/pages/dash/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dash/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dash/+page.js";
export const imports = ["_app/immutable/nodes/4.C8zqIK_S.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/B35-YkL_.js","_app/immutable/chunks/CnqIo5fe.js"];
export const stylesheets = [];
export const fonts = [];
