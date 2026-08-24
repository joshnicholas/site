// @ts-nocheck
import data from '$lib/data/journo-meta.json'

export const prerender = true;

/** */
export async function load() {
	return { data };
}
