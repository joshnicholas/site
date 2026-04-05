import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/7.DMZMLIlv.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/f3KDo4Rv.js","_app/immutable/chunks/BoOhwXCD.js"];
export const stylesheets = [];
export const fonts = [];
