export const prerender = true;
export const ssr = true;
import data from '$lib/data/sinhalavocab.json'

/** @type {import('./$types').PageLoad} */

// import { DOMParser } from 'xmldom';

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
    