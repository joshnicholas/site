import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.Dsk7_qQN.js","_app/immutable/chunks/C8JlbJHo.js","_app/immutable/chunks/DgrZhXed.js","_app/immutable/chunks/U3lYQsUk.js"];
export const stylesheets = [];
export const fonts = [];
