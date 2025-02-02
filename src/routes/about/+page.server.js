// export const prerender = true;
// export const ssr = true;

/** @type {import('./$types').PageLoad} */

// import { DOMParser } from 'xmldom';

// export async function load({ fetch }) {

//     const targetUrl = 'https://www.theguardian.com/profile/josh-nicholas/rss';
//     const response = await fetch(targetUrl);
//     const text = await response.text();
//     const parser = new DOMParser();
//     const xml = parser.parseFromString(text, 'application/xml');
//     const items = Array.from(xml.getElementsByTagName('item')).map(item => ({
//         title: item.getElementsByTagName('title')[0].textContent,
//         link: item.getElementsByTagName('link')[0].textContent,
//         description: item.getElementsByTagName('description')[0].textContent,
//         pubDate: item.getElementsByTagName('pubDate')[0].textContent
//     }));
//     // console.log("items: ", items)
    
//     return { items };
// }