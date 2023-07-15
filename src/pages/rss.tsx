import fs from 'fs';
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import RSS from 'rss';

import { feed, metadata, writing } from '../content';

export const generateRss = (): void => {
  const rss = new RSS({
    title: metadata.rss.title,
    description: metadata.rss.body,
    image_url: metadata.rss.image_url,
    author: metadata.rss.author,
    categories: metadata.rss.categories,
    copyright: metadata.rss.copyright,
    language: metadata.rss.language,
    pubDate: new Date().toISOString(),
    generator: 'https://www.npmjs.com/package/rss',
    site_url: 'https://melnycz.uk',
    feed_url: 'https://melnycz.uk/rss',
  });

  feed.forEach((post) => {
    rss.item({
      title: post.title,
      description: post.body,
      url: `https://melnycz.uk/feed/${post.date}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: { url: post.image },
    });
  });

  writing.forEach((post) => {
    rss.item({
      title: post.title,
      description: post.body,
      url: `https://melnycz.uk/writing/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
      enclosure: { url: post.image },
    });
  });

  rss.items.sort((a, b) => a.date.getTime() - b.date.getTime());

  fs.writeFileSync('./public/rss.xml', rss.xml());
};

export const getStaticProps: GetStaticProps<
  Record<string, never>
> = async () => {
  generateRss();
  return { props: {} };
};

const RssPage: FC = () => {
  useEffect(() => {
    window.location = ('/rss.xml' as unknown) as Location;
  }, []);

  return null;
};

export default RssPage;
