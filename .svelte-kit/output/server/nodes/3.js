import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.DhMUwy1s.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/bP8ZzjbB.js","_app/immutable/chunks/Cm_b2-pt.js","_app/immutable/chunks/CtWVPDyD.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/C5rumEg2.js","_app/immutable/chunks/DvSGzErW.js","_app/immutable/chunks/CnqIo5fe.js","_app/immutable/chunks/D7MblD5l.js","_app/immutable/chunks/BkwzdDHc.js","_app/immutable/chunks/BEj38TFz.js","_app/immutable/chunks/DJkLaCF5.js"];
export const stylesheets = ["_app/immutable/assets/3.DAwqqHzo.css"];
export const fonts = [];
