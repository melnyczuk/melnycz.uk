import { generateRss } from '../rss';
import { getStaticProps as getProjectProps } from './projects';

export { default } from './projects';
export const getStaticProps = (ctx) => {
  generateRss();
  return getProjectProps(ctx);
};
