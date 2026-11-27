import * as universal from '../entries/pages/journalism/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/journalism/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/journalism/+page.js";
export const imports = ["_app/immutable/nodes/5.BQTs4_cG.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/snRdvvnv.js","_app/immutable/chunks/CLltATAm.js","_app/immutable/chunks/DeLkSwrl.js","_app/immutable/chunks/BL8Jwi61.js","_app/immutable/chunks/Db37-7xo.js","_app/immutable/chunks/BNpJrMK1.js","_app/immutable/chunks/28udYh4u.js"];
export const stylesheets = ["_app/immutable/assets/radio.3j5tGBDX.css","_app/immutable/assets/5.B_uMFwZQ.css"];
export const fonts = [];
