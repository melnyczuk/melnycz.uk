import type { FeedEntryType } from '../../types';
import { parse } from '../parse';

const entries = import.meta.glob<string>('./markdown/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const feed = Object.values(entries)
  .map((markdown) => parse<FeedEntryType>(markdown))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
