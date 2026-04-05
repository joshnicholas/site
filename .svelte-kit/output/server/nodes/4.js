import * as universal from '../entries/pages/dash/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dash/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dash/+page.js";
export const imports = ["_app/immutable/nodes/4.CHIKA96W.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Dg_Xarbj.js","_app/immutable/chunks/D8ABnQJ5.js","_app/immutable/chunks/BoOhwXCD.js","_app/immutable/chunks/DGROEEhx.js"];
export const stylesheets = [];
export const fonts = [];
