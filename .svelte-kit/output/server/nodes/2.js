import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.QoGjsqX3.js","_app/immutable/chunks/brfgF_UD.js","_app/immutable/chunks/Db7TV6tD.js","_app/immutable/chunks/Cb4HDpD0.js","_app/immutable/chunks/hfsYQF5s.js","_app/immutable/chunks/ChtGKHiB.js","_app/immutable/chunks/DbITDQzA.js","_app/immutable/chunks/CBTcvXiL.js","_app/immutable/chunks/D1cv1mFX.js","_app/immutable/chunks/zdaXpd4_.js","_app/immutable/chunks/Bm1_bZKN.js","_app/immutable/chunks/BI7sW3wi.js","_app/immutable/chunks/DfpvI4wt.js","_app/immutable/chunks/CaYdsCxv.js","_app/immutable/chunks/CfNR86r4.js","_app/immutable/chunks/DJjTwnXG.js"];
export const stylesheets = ["_app/immutable/assets/2.DNgQiKkQ.css","_app/immutable/assets/imageSet.DwfmQDzx.css"];
export const fonts = [];
