

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BfzxzA9O.js","_app/immutable/chunks/C8JlbJHo.js","_app/immutable/chunks/DgrZhXed.js","_app/immutable/chunks/U3lYQsUk.js"];
export const stylesheets = ["_app/immutable/assets/0.BYVjAsA4.css"];
export const fonts = [];
