import { redirect } from '@sveltejs/kit';

export const prerender = false; // Disable prerendering for redirect pages

/** @type {import('./$types').PageLoad} */
export function load() {
    throw redirect(301, '/tinkering');
}