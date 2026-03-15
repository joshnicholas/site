import * as universal from '../entries/pages/tinkering/sinhalacards/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tinkering/sinhalacards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/tinkering/sinhalacards/+page.js";
export const imports = ["_app/immutable/nodes/10.DbyxNuPD.js","_app/immutable/chunks/Sl3aqvhM.js","_app/immutable/chunks/T3-k3ynv.js","_app/immutable/chunks/Cjnfn7nr.js","_app/immutable/chunks/DNgivrdc.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/CelpaW_X.js","_app/immutable/chunks/p7prt5q5.js","_app/immutable/chunks/CC8TX1Jq.js","_app/immutable/chunks/BudltVtX.js","_app/immutable/chunks/btzKrme9.js"];
export const stylesheets = ["_app/immutable/assets/nav.BhJx0oSA.css","_app/immutable/assets/postList.DjdvdsIi.css"];
export const fonts = [];
