import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BV6EZdTi.js","_app/immutable/chunks/hfsYQF5s.js","_app/immutable/chunks/Db7TV6tD.js","_app/immutable/chunks/ChtGKHiB.js","_app/immutable/chunks/B0LJqfXZ.js","_app/immutable/chunks/Cb4HDpD0.js","_app/immutable/chunks/DbITDQzA.js"];
export const stylesheets = ["_app/immutable/assets/nav.C7DIyg2k.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
