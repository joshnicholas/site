import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DxfPIgig.js","_app/immutable/chunks/DYbj7MnH.js","_app/immutable/chunks/Dcs9cFTW.js","_app/immutable/chunks/DK4A_gdK.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/Y-FhYAqm.js","_app/immutable/chunks/DAhxSgRl.js","_app/immutable/chunks/D_695iEC.js","_app/immutable/chunks/CT_PFCvU.js","_app/immutable/chunks/S2KC-5ih.js","_app/immutable/chunks/CQWe4DnF.js","_app/immutable/chunks/Bce6RcNG.js","_app/immutable/chunks/D94U9zoS.js","_app/immutable/chunks/CYcE8pdb.js","_app/immutable/chunks/DXhCote5.js","_app/immutable/chunks/DmXdX-4u.js","_app/immutable/chunks/OF_FXsqD.js","_app/immutable/chunks/DV5skP4q.js"];
export const stylesheets = ["_app/immutable/assets/2.DNgQiKkQ.css","_app/immutable/assets/imageSet.DwfmQDzx.css"];
export const fonts = [];
