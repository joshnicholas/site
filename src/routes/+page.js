import data from '$lib/scribbles.json'
// import { shuffle } from 'd3-array';

export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
// 	const images =import.meta.glob('/static/images/*.{jpg, jpeg, png}');
// 	// console.log("images: ", images)
// const imageDataPromises = Object.keys(images).map((path)=> images[path]());
//      const imageData = await Promise.all(imageDataPromises);
//      const imageDataArray = imageData.map((element) => element.default);
// 	// console.log("imageDataArray: ", imageDataArray)
	return { data: data,
		// imageDataArray: imageDataArray

	 };
}

