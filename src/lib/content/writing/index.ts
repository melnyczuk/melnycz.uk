import type { WritingPostType } from '../../types';
import { parse } from '../parse';

const posts = import.meta.glob<string>('./markdown/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const writing = Object.values(posts)
  .map((markdown) => parse<WritingPostType>(markdown))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
