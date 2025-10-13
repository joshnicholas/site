import * as server from '../entries/pages/links/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CW4Htldu.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/B5jo0NO8.js","_app/immutable/chunks/B7D9TGi4.js","_app/immutable/chunks/Kj5y9EOd.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/BW4x_i8T.js","_app/immutable/chunks/BDwxEG9b.js","_app/immutable/chunks/LV7pzLJN.js","_app/immutable/chunks/DtnH6vMF.js","_app/immutable/chunks/B9u3UyxJ.js","_app/immutable/chunks/DGaA3PFE.js","_app/immutable/chunks/D0pxVHQo.js","_app/immutable/chunks/Ct11SXnI.js","_app/immutable/chunks/DQ14yVUS.js","_app/immutable/chunks/vDhgsjCx.js"];
export const stylesheets = ["_app/immutable/assets/6.CD0Vp3_Z.css","_app/immutable/assets/nav.BhJx0oSA.css","_app/immutable/assets/postList.DjdvdsIi.css","_app/immutable/assets/IndexSlider.CuO5LPiO.css"];
export const fonts = [];
