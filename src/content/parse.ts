import fm from 'front-matter';

import { MarkdownType } from '../types';

export function parse<T extends MarkdownType>(markdown: string): T {
  const { attributes, body } = fm<T>(markdown);
  return { ...attributes, body };
}
