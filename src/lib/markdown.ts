import { marked } from 'marked';

// CommonMark only (no GFM), matching what remark@13 rendered before
export const renderMarkdown = (markdown: string): string =>
  marked.parse(markdown, { async: false, gfm: false });
