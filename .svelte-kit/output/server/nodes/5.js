import * as server from '../entries/pages/links/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/links/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BNCicKB7.js","_app/immutable/chunks/DAhxSgRl.js","_app/immutable/chunks/Dcs9cFTW.js","_app/immutable/chunks/CT_PFCvU.js","_app/immutable/chunks/S2KC-5ih.js","_app/immutable/chunks/DK4A_gdK.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/CQWe4DnF.js","_app/immutable/chunks/DV5skP4q.js","_app/immutable/chunks/Bce6RcNG.js","_app/immutable/chunks/D94U9zoS.js","_app/immutable/chunks/Y-FhYAqm.js","_app/immutable/chunks/BJWDafmj.js","_app/immutable/chunks/BzGNcvK1.js","_app/immutable/chunks/CYcE8pdb.js","_app/immutable/chunks/D_695iEC.js"];
export const stylesheets = ["_app/immutable/assets/5.tn0RQdqM.css","_app/immutable/assets/nav.C7DIyg2k.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
