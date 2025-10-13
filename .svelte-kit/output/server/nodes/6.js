import * as server from '../entries/pages/links/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DgXsFhv9.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/C5rumEg2.js","_app/immutable/chunks/DvSGzErW.js","_app/immutable/chunks/CtWVPDyD.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/CnqIo5fe.js","_app/immutable/chunks/DPiKIqWj.js","_app/immutable/chunks/BEj38TFz.js","_app/immutable/chunks/bP8ZzjbB.js","_app/immutable/chunks/DJkLaCF5.js","_app/immutable/chunks/BkwzdDHc.js","_app/immutable/chunks/Cm_b2-pt.js","_app/immutable/chunks/D7MblD5l.js","_app/immutable/chunks/B5UyK293.js","_app/immutable/chunks/B35-YkL_.js"];
export const stylesheets = ["_app/immutable/assets/6.CD0Vp3_Z.css","_app/immutable/assets/nav.BhJx0oSA.css","_app/immutable/assets/postList.DjdvdsIi.css","_app/immutable/assets/IndexSlider.CuO5LPiO.css"];
export const fonts = [];
