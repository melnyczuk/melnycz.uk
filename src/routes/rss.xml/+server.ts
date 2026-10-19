import { generateRss } from '#lib/rss.js';

export const prerender = true;

export const GET = () =>
  new Response(generateRss(), {
    headers: { 'content-type': 'application/xml' },
  });
