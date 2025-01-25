import data from '$lib/scribbles.json'
// import { shuffle } from 'd3-array';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	
	return { data };
}

