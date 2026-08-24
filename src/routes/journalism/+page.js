import data from '$lib/data/journo-meta.json'

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	return { data };
}
