import fs from 'fs';
import nmd from 'nano-markdown';
import RSS from 'rss';

import { feed, metadata, writing } from './content';

export const generateRss = (): void => {
  const rss = new RSS({
    title: metadata.rss.title,
    description: metadata.rss.body,
    image_url: metadata.rss.image_url,
    categories: metadata.rss.categories,
    copyright: metadata.rss.copyright,
    language: metadata.rss.language,
    pubDate: new Date().toISOString(),
    generator: 'https://www.npmjs.com/package/rss',
    site_url: 'https://melnycz.uk',
    feed_url: 'https://melnycz.uk/rss.xml',
  });

  feed.forEach((post) => {
    rss.item({
      title: post.title,
      description: nmd(post.body),
      url: `https://melnycz.uk/feed/${post.date}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: { url: post.image?.src, type: 'image/jpeg' },
      author: metadata.rss.author,
    });
  });

  writing.forEach((post) => {
    rss.item({
      title: post.title,
      description: nmd(post.body),
      url: `https://melnycz.uk/writing/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: { url: post.image, type: 'image/jpeg' },
      author: metadata.rss.author,
    });
  });

  rss.items.sort((a, b) => a.date.getTime() - b.date.getTime());

  const xml = rss.xml();

  fs.writeFileSync('./public/rss.xml', xml);
};
