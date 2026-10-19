import RSS from 'rss';

import { feed, metadata, writing } from './content';
import { renderMarkdown } from './markdown';

export const generateRss = (): string => {
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

  const items: RSS.ItemOptions[] = [
    ...feed.map((post) => ({
      title: post.title,
      description: renderMarkdown(post.body),
      url: `https://melnycz.uk/feed/${post.date}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: post.image && { url: post.image.src, type: 'image/jpeg' },
      author: metadata.rss.author,
    })),
    ...writing.map((post) => ({
      title: post.title,
      description: renderMarkdown(post.body),
      url: `https://melnycz.uk/writing/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: post.image
        ? { url: post.image, type: 'image/jpeg' }
        : undefined,
      author: metadata.rss.author,
    })),
  ];

  items
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .forEach((item) => rss.item(item));

  return rss.xml();
};
