import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DJ4iV6Wm.js","_app/immutable/chunks/J7WWXalX.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/Cjnfn7nr.js","_app/immutable/chunks/DNgivrdc.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/p7prt5q5.js","_app/immutable/chunks/BudltVtX.js","_app/immutable/chunks/DrPzfxqG.js","_app/immutable/chunks/BPrdV0Ag.js","_app/immutable/chunks/DgoAXyak.js","_app/immutable/chunks/DFwh3jP6.js","_app/immutable/chunks/FI1qfSYl.js","_app/immutable/chunks/CelpaW_X.js","_app/immutable/chunks/Fp4Rlu81.js","_app/immutable/chunks/xyl-P3E0.js","_app/immutable/chunks/sEqg_J-p.js","_app/immutable/chunks/btzKrme9.js","_app/immutable/chunks/Dgd70HLi.js"];
export const stylesheets = ["_app/immutable/assets/2.rPu_IYZD.css","_app/immutable/assets/imageSet.ayyY-9wR.css","_app/immutable/assets/IndexSlider.CuO5LPiO.css"];
export const fonts = [];
