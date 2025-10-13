import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Iw0zJiRb.js","_app/immutable/chunks/CIm_erth.js","_app/immutable/chunks/DH3oHwrh.js","_app/immutable/chunks/vDhgsjCx.js","_app/immutable/chunks/BW4x_i8T.js","_app/immutable/chunks/LV7pzLJN.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/zFMLaeed.js","_app/immutable/chunks/B9u3UyxJ.js","_app/immutable/chunks/DtnH6vMF.js"];
export const stylesheets = ["_app/immutable/assets/0.A4FsU14z.css","_app/immutable/assets/nav.BhJx0oSA.css"];
export const fonts = [];
