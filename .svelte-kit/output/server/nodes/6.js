import * as server from '../entries/pages/links/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DL9sVgye.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/DFwh3jP6.js","_app/immutable/chunks/Cjnfn7nr.js","_app/immutable/chunks/DNgivrdc.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/FI1qfSYl.js","_app/immutable/chunks/Cy59ukzL.js","_app/immutable/chunks/Fp4Rlu81.js","_app/immutable/chunks/BudltVtX.js","_app/immutable/chunks/BPrdV0Ag.js","_app/immutable/chunks/p7prt5q5.js","_app/immutable/chunks/D7ppRcB-.js","_app/immutable/chunks/CelpaW_X.js","_app/immutable/chunks/DrPzfxqG.js","_app/immutable/chunks/btzKrme9.js"];
export const stylesheets = ["_app/immutable/assets/6.CD0Vp3_Z.css","_app/immutable/assets/postList.DjdvdsIi.css","_app/immutable/assets/IndexSlider.CgG45-Ek.css"];
export const fonts = [];
