import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BMr9DKS6.js","_app/immutable/chunks/C8JlbJHo.js","_app/immutable/chunks/DgrZhXed.js","_app/immutable/chunks/BrFf5Tdp.js","_app/immutable/chunks/U3lYQsUk.js","_app/immutable/chunks/04FFhBmT.js","_app/immutable/chunks/DKtfOuWP.js","_app/immutable/chunks/Mb2jYwnW.js"];
export const stylesheets = ["_app/immutable/assets/2.CTy5lglY.css"];
export const fonts = [];