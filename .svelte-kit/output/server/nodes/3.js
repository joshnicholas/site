import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.yJNZsZVE.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/Fp4Rlu81.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/BudltVtX.js","_app/immutable/chunks/D7ppRcB-.js","_app/immutable/chunks/DNgivrdc.js","_app/immutable/chunks/DFwh3jP6.js","_app/immutable/chunks/Cjnfn7nr.js","_app/immutable/chunks/FI1qfSYl.js","_app/immutable/chunks/CelpaW_X.js","_app/immutable/chunks/p7prt5q5.js","_app/immutable/chunks/BPrdV0Ag.js"];
export const stylesheets = ["_app/immutable/assets/3.CbvdES36.css"];
export const fonts = [];
