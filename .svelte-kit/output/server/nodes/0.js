import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BP39gl1e.js","_app/immutable/chunks/1qIO3GIU.js","_app/immutable/chunks/BfSmqRLo.js","_app/immutable/chunks/BL8Jwi61.js","_app/immutable/chunks/-0YnnR2x.js","_app/immutable/chunks/28udYh4u.js","_app/immutable/chunks/Dg16k3ZX.js","_app/immutable/chunks/Db37-7xo.js","_app/immutable/chunks/BNpJrMK1.js"];
export const stylesheets = ["_app/immutable/assets/0.BSAFY67e.css"];
export const fonts = [];
