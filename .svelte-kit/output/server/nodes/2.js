import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DIj4a1QE.js","_app/immutable/chunks/woYEinY4.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/B7D9TGi4.js","_app/immutable/chunks/Kj5y9EOd.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/DGaA3PFE.js","_app/immutable/chunks/DtnH6vMF.js","_app/immutable/chunks/DQ14yVUS.js","_app/immutable/chunks/B9u3UyxJ.js","_app/immutable/chunks/DEEl4pae.js","_app/immutable/chunks/vDhgsjCx.js","_app/immutable/chunks/B5jo0NO8.js","_app/immutable/chunks/BW4x_i8T.js","_app/immutable/chunks/LV7pzLJN.js","_app/immutable/chunks/zFMLaeed.js","_app/immutable/chunks/BDwxEG9b.js"];
export const stylesheets = ["_app/immutable/assets/2.rPu_IYZD.css","_app/immutable/assets/imageSet.DqNHSGR4.css","_app/immutable/assets/IndexSlider.CuO5LPiO.css"];
export const fonts = [];
