import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/6.CZKVN4wM.js","_app/immutable/chunks/KDNVALnk.js","_app/immutable/chunks/DZUBUkNQ.js","_app/immutable/chunks/Bcb5BEhM.js","_app/immutable/chunks/Cd_Pec2I.js","_app/immutable/chunks/BZzPJYfm.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/D1n7riNJ.js"];
export const stylesheets = ["_app/immutable/assets/nav.C7DIyg2k.css"];
export const fonts = [];
