import data from '$lib/scribbles.json'
// import { shuffle } from 'd3-array';

export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	
	return { data };
}

