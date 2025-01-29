

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9w0ANhxo.js","_app/immutable/chunks/s8Df0u34.js","_app/immutable/chunks/CQ5YOXVz.js","_app/immutable/chunks/h-EOibB2.js"];
export const stylesheets = ["_app/immutable/assets/0.BYVjAsA4.css"];
export const fonts = [];
