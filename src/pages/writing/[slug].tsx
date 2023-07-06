import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown, Navigation } from '../../components';
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

const WritingPostPage: FC<WritingPostType> = ({ date, title, body }) => {
  return (
    <>
      <Navigation />
      <main className={styles['writing_post']}>
        <article className={styles['writing_post__article']}>
          <h1 className={styles['writing_post__title']}>{title}</h1>
          <Markdown className={styles['writing_post__body']} body={body} />
        </article>
        <div className={styles['writing_post__date']}>{date}</div>
      </main>
    </>
  );
};

export default WritingPostPage;
