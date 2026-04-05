import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.hvO67TOD.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/btzKrme9.js","_app/immutable/chunks/FI1qfSYl.js","_app/immutable/chunks/Fp4Rlu81.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Dgd70HLi.js","_app/immutable/chunks/BPrdV0Ag.js","_app/immutable/chunks/BudltVtX.js"];
export const stylesheets = ["_app/immutable/assets/0.VEs7ZOcD.css"];
export const fonts = [];
