import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DvUz4BZ3.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/C76sokaA.js","_app/immutable/chunks/CLltATAm.js","_app/immutable/chunks/DeLkSwrl.js","_app/immutable/chunks/BL8Jwi61.js","_app/immutable/chunks/snRdvvnv.js","_app/immutable/chunks/Db37-7xo.js","_app/immutable/chunks/BNpJrMK1.js","_app/immutable/chunks/Dg16k3ZX.js","_app/immutable/chunks/WzTsjZtE.js"];
export const stylesheets = ["_app/immutable/assets/radio.3j5tGBDX.css","_app/immutable/assets/2.Dw139q_b.css"];
export const fonts = [];
