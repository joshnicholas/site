import * as server from '../entries/pages/linklog/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/linklog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/linklog/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DJiviuxJ.js","_app/immutable/chunks/KDNVALnk.js","_app/immutable/chunks/DZUBUkNQ.js","_app/immutable/chunks/zjkvgTnp.js","_app/immutable/chunks/DH3cXGVc.js","_app/immutable/chunks/BZzPJYfm.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/CeS_3cYE.js","_app/immutable/chunks/DMU45Ekm.js","_app/immutable/chunks/BCZOfQcJ.js","_app/immutable/chunks/tquktJo8.js","_app/immutable/chunks/DvD6vjOg.js","_app/immutable/chunks/Bcb5BEhM.js","_app/immutable/chunks/Cd_Pec2I.js","_app/immutable/chunks/D1n7riNJ.js"];
export const stylesheets = ["_app/immutable/assets/nav.C7DIyg2k.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
