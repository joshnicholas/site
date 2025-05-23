// @ts-nocheck
export const prerender = true;
export const ssr = true;
import data from '$lib/data/sinhalavocab.json'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */

// import { DOMParser } from 'xmldom';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
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
    