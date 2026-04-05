import * as universal from '../entries/pages/tinkering/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/+page.js";
export const imports = ["_app/immutable/nodes/7.CUNzLz4H.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/BudltVtX.js","_app/immutable/chunks/D7ppRcB-.js","_app/immutable/chunks/DNgivrdc.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/btzKrme9.js"];
export const stylesheets = [];
export const fonts = [];
