import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.2XAOgxBp.js","_app/immutable/chunks/KDNVALnk.js","_app/immutable/chunks/DZUBUkNQ.js","_app/immutable/chunks/Bcb5BEhM.js","_app/immutable/chunks/Cd_Pec2I.js","_app/immutable/chunks/BZzPJYfm.js","_app/immutable/chunks/B9QI8j-U.js"];
export const stylesheets = [];
export const fonts = [];
