import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.B-4s-CSD.js","_app/immutable/chunks/BzGqo130.js","_app/immutable/chunks/DB9C_V8u.js","_app/immutable/chunks/vJfbeyRE.js","_app/immutable/chunks/DvSGzErW.js","_app/immutable/chunks/CtWVPDyD.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/BkwzdDHc.js","_app/immutable/chunks/bP8ZzjbB.js","_app/immutable/chunks/B5UyK293.js","_app/immutable/chunks/DJkLaCF5.js","_app/immutable/chunks/Cat5Y2XJ.js","_app/immutable/chunks/B35-YkL_.js","_app/immutable/chunks/C5rumEg2.js","_app/immutable/chunks/CnqIo5fe.js","_app/immutable/chunks/BEj38TFz.js","_app/immutable/chunks/BsyKom8y.js","_app/immutable/chunks/DPiKIqWj.js"];
export const stylesheets = ["_app/immutable/assets/2.rPu_IYZD.css","_app/immutable/assets/imageSet.DqNHSGR4.css","_app/immutable/assets/IndexSlider.CuO5LPiO.css"];
export const fonts = [];
