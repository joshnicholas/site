// @ts-nocheck
// +page.server.js
export const prerender = true;

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ fetch }) {
    const jsonUrl = 'https://cms-gules-alpha.vercel.app/links_json';

    const response = await fetch(jsonUrl);
    const data = await response.json();

    // // Transform lowercase field names to capitalized ones
    // const data = rawData.map(item => ({
    //     Date: item.date,
    //     Title: item.title,
    //     Url: item.url,
    //     Category: item.category,
    //     Quote: item.quote,
    //     Text: item.text
    // }));

    return { data };
}