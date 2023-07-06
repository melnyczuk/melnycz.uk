import fm from 'front-matter';

import { MarkdownType } from '../types';

export function parse<T extends MarkdownType>(markdown: string): T {
  const parsed = fm<T>(markdown);
  const { attributes, body } = parsed;
  return { ...attributes, body };
}
