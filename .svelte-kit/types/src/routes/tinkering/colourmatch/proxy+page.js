// @ts-nocheck
export const prerender = true;
export const ssr = true;
import colourData from '$lib/data/colours.json';

// No sorting functions

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ fetch, params }) {
    // Process and prepare color data
    let processedData = colourData.map(item => {
        // Extract all color values dynamically (keys that are numbers or start with numbers)
        const colorKeys = Object.keys(item).filter(key => 
            !isNaN(parseInt(key.charAt(0))) && item[key].startsWith('#')
        );
        
        // Get all the colors from the item
        const colors = colorKeys.map(key => item[key]);
        
        // Return the original item with additional properties
        return {
            ...item,
            colorKeys,
            colors
        };
    });
    
    // No sorting or processing of the array order
    
    // // Log some information about the data
    // if (processedData.length > 0) {
    //     console.log("Data info:", {
    //         count: processedData.length,
    //         firstItem: processedData[0].Date,
    //         lastItem: processedData[processedData.length-1].Date
    //     });
    // }
    
    // // Log the first few items to debug
    // if (processedData.length > 0) {
    //     console.log("First few dates:", 
    //         processedData.slice(0, 3).map(item => item.Date),
    //         "Last few dates:",
    //         processedData.slice(-3).map(item => item.Date)
    //     );
    // }
    
    return { 
        colourData: processedData
    };
}