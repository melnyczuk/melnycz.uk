import fm from 'front-matter';

import { MetadataType } from '../../types';
import markdown from './markdown/metadata.md';

const parsed = fm<Omit<MetadataType, 'description'>>(markdown);

export const metadata: MetadataType = {
  ...parsed.attributes,
  description: parsed.body,
};
