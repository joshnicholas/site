import * as universal from '../entries/pages/tinkering/sinhalacards/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/sinhalacards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/sinhalacards/+page.js";
export const imports = ["_app/immutable/nodes/10.BXj0nySt.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/DvSGzErW.js","_app/immutable/chunks/CtWVPDyD.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/D7MblD5l.js","_app/immutable/chunks/BkwzdDHc.js","_app/immutable/chunks/Dc3Rdtdy.js","_app/immutable/chunks/bP8ZzjbB.js","_app/immutable/chunks/B35-YkL_.js"];
export const stylesheets = ["_app/immutable/assets/nav.BhJx0oSA.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
