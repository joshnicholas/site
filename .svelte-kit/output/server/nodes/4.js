import * as universal from '../entries/pages/colours/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/colours/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/colours/+page.js";
export const imports = ["_app/immutable/nodes/4.DVeOwKpb.js","_app/immutable/chunks/hfsYQF5s.js","_app/immutable/chunks/Db7TV6tD.js","_app/immutable/chunks/D1cv1mFX.js","_app/immutable/chunks/Cb4HDpD0.js","_app/immutable/chunks/Bn8hrnDj.js","_app/immutable/chunks/Bm1_bZKN.js","_app/immutable/chunks/BI7sW3wi.js","_app/immutable/chunks/ChtGKHiB.js","_app/immutable/chunks/B0LJqfXZ.js","_app/immutable/chunks/DJjTwnXG.js","_app/immutable/chunks/DbITDQzA.js"];
export const stylesheets = ["_app/immutable/assets/4.gPmmZy0Y.css","_app/immutable/assets/nav.C7DIyg2k.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
