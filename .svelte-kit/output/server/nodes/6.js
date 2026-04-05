import * as server from '../entries/pages/links/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CWsbUY3W.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/-M_H9jDM.js","_app/immutable/chunks/L9Xe-XEh.js","_app/immutable/chunks/HY3G8eda.js","_app/immutable/chunks/DTvAo5_-.js","_app/immutable/chunks/Cp1PNA7d.js","_app/immutable/chunks/BbLrIwzb.js","_app/immutable/chunks/BhBUyOE9.js","_app/immutable/chunks/CbBnc_fU.js","_app/immutable/chunks/CfYdR1Gx.js","_app/immutable/chunks/f3KDo4Rv.js","_app/immutable/chunks/Bi5URJ-c.js","_app/immutable/chunks/BoOhwXCD.js"];
export const stylesheets = ["_app/immutable/assets/IndexSlider.sRtYrOxM.css","_app/immutable/assets/6.BPGqINwr.css","_app/immutable/assets/postList.CO7EjeUI.css"];
export const fonts = [];
