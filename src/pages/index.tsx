import { GetStaticProps } from 'next';

import { generateRss } from '../rss';
import { getStaticProps as getProjectProps } from './projects';

export { default } from './projects';
export const getStaticProps: GetStaticProps = (ctx) => {
  generateRss();
  return getProjectProps(ctx);
};
