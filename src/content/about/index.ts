import fm from 'front-matter';

import { AboutType } from '../../types';
import markdown from './markdown/bio.md';

const parsed = fm<Omit<AboutType, 'bio'>>(markdown);

export const about: AboutType = {
  ...parsed.attributes,
  bio: parsed.body,
};
