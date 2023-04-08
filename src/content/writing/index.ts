import fm from 'front-matter';

import { WritingPostType } from '../../types';
import * as posts from './markdown';

type WritingContentType = Omit<WritingPostType, 'image'> & {
  image: string;
};

export const writing: WritingContentType[] = Object.values<string>(posts).map(
  (post) => {
    const { body, attributes } = fm<Omit<WritingContentType, 'body'>>(post);
    return { ...attributes, content: body };
  }
);
