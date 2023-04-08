import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown } from '../../components';
import { writing } from '../../content';
import { WritingPostType } from '../../types';
import styles from './writing.module.scss';

type WritingPostParams = { slug: string };

export const getStaticPaths: GetStaticPaths<WritingPostParams> = async () => {
  const paths = writing.map(({ slug }) => `/writing/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  WritingPostType,
  WritingPostParams
> = async ({ params }) => {
  if (!params) throw new Error('Writing post has no slug');
  const { slug } = params;
  const post = writing.find((p) => p.slug === slug);
  if (!post) throw new Error('Writing not found');
  return { props: post };
};

const WritingPostPage: FC<WritingPostType> = ({ date, content }) => {
  return (
    <main className={styles['writing_post']}>
      <Markdown className={styles['writing_post__body']} content={content} />
      <div className={styles['writing_post__date']}>{date}</div>
    </main>
  );
};

export default WritingPostPage;
