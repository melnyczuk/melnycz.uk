import fs from 'fs';
import RSS from 'rss';

import { metadata, writing } from './content';

export const generateRss = () => {
  console.log('rss');
  const feed = new RSS({
    title: metadata.rss.title,
    description: metadata.rss.body,
    image_url: metadata.rss.image_url,
    author: metadata.rss.author,
    categories: metadata.rss.categories,
    copyright: metadata.rss.copyright,
    language: metadata.rss.language,
    ttl: metadata.rss.ttl,
    pubDate: new Date().toISOString(),
    generator: 'https://www.npmjs.com/package/rss',
    site_url: 'https://melnycz.uk',
    feed_url: 'https://melnycz.uk/rss.xml',
  });

  writing.forEach((post) => {
    feed.item({
      title: post.title,
      description: `${post.body.slice(0, 200).trimEnd()}...`,
      url: `https://melnycz.uk/writing/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: { url: post.image },
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.xml());
};
