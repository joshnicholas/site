import * as universal from '../entries/pages/tinkering/sinhalacards/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/sinhalacards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/sinhalacards/+page.js";
export const imports = ["_app/immutable/nodes/10.DPA9rGaa.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/L9Xe-XEh.js","_app/immutable/chunks/DTvAo5_-.js","_app/immutable/chunks/BhBUyOE9.js","_app/immutable/chunks/xD4mGxzm.js","_app/immutable/chunks/CfYdR1Gx.js","_app/immutable/chunks/BoOhwXCD.js"];
export const stylesheets = ["_app/immutable/assets/postList.CO7EjeUI.css"];
export const fonts = [];
