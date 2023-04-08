import fm from 'front-matter';

import { AboutType } from '../../types';
import bio from './markdown/bio.md';

const aboutData = fm<Omit<AboutType, 'bio'>>(bio);

export const about: AboutType = {
  bio: aboutData.body,
  ...aboutData.attributes,
};
