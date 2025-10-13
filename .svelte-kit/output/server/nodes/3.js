import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.dOTHahU2.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/DtnH6vMF.js","_app/immutable/chunks/D0pxVHQo.js","_app/immutable/chunks/Kj5y9EOd.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/B5jo0NO8.js","_app/immutable/chunks/B7D9TGi4.js","_app/immutable/chunks/BW4x_i8T.js","_app/immutable/chunks/Ct11SXnI.js","_app/immutable/chunks/DGaA3PFE.js","_app/immutable/chunks/LV7pzLJN.js","_app/immutable/chunks/B9u3UyxJ.js"];
export const stylesheets = ["_app/immutable/assets/3.DAwqqHzo.css"];
export const fonts = [];
