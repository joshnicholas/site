import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BLcA4sEi.js","_app/immutable/chunks/BwtPWobz.js","_app/immutable/chunks/DZUBUkNQ.js","_app/immutable/chunks/BZzPJYfm.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Bcb5BEhM.js","_app/immutable/chunks/KDNVALnk.js","_app/immutable/chunks/D1n7riNJ.js","_app/immutable/chunks/zjkvgTnp.js","_app/immutable/chunks/DH3cXGVc.js","_app/immutable/chunks/CeS_3cYE.js","_app/immutable/chunks/BCZOfQcJ.js","_app/immutable/chunks/tquktJo8.js","_app/immutable/chunks/DfOgGoS9.js","_app/immutable/chunks/81YN6kuj.js","_app/immutable/chunks/CnNcYKmi.js","_app/immutable/chunks/DZOuUT1A.js"];
export const stylesheets = ["_app/immutable/assets/2.DNgQiKkQ.css","_app/immutable/assets/imageSet.DwfmQDzx.css"];
export const fonts = [];
