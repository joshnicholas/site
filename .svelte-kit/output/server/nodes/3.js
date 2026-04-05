import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.DS-FAAMx.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/DTvAo5_-.js","_app/immutable/chunks/CbBnc_fU.js","_app/immutable/chunks/CfYdR1Gx.js","_app/immutable/chunks/f3KDo4Rv.js","_app/immutable/chunks/-M_H9jDM.js","_app/immutable/chunks/L9Xe-XEh.js","_app/immutable/chunks/BhBUyOE9.js","_app/immutable/chunks/Cp1PNA7d.js","_app/immutable/chunks/BbLrIwzb.js"];
export const stylesheets = ["_app/immutable/assets/3.BkXAyOZ8.css"];
export const fonts = [];
