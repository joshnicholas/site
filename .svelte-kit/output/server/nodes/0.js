import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C7DyQTF2.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/BoOhwXCD.js","_app/immutable/chunks/DGROEEhx.js","_app/immutable/chunks/CbBnc_fU.js","_app/immutable/chunks/CfYdR1Gx.js","_app/immutable/chunks/BMZrOLxJ.js","_app/immutable/chunks/BbLrIwzb.js"];
export const stylesheets = ["_app/immutable/assets/0.BR-FOOGr.css"];
export const fonts = [];
