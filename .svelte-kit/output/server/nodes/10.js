import * as universal from '../entries/pages/tinkering/sinhalacards/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/sinhalacards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/sinhalacards/+page.js";
export const imports = ["_app/immutable/nodes/10.CZ7FsVEk.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/B7D9TGi4.js","_app/immutable/chunks/Kj5y9EOd.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Ct11SXnI.js","_app/immutable/chunks/DGaA3PFE.js","_app/immutable/chunks/4wuVCgTh.js","_app/immutable/chunks/DtnH6vMF.js","_app/immutable/chunks/vDhgsjCx.js"];
export const stylesheets = ["_app/immutable/assets/nav.BhJx0oSA.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
