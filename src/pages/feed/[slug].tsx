import classNames from 'classnames';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown, Navigation } from '../../components';
import { feed } from '../../content';
import { FeedEntryType } from '../../types';
import styles from './feed.module.scss';

type FeedEntryParams = { slug: string };

export const getStaticPaths: GetStaticPaths<FeedEntryParams> = async () => {
  const paths = feed.map(({ date }) => `/feed/${date}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  FeedEntryType,
  FeedEntryParams
> = async ({ params }) => {
  if (!params) throw new Error('Feed entry has no slug');
  const { slug } = params;
  const post = feed.find((p) => p.date === slug);
  if (!post) throw new Error('Feed entry not found');
  return { props: post };
};

const FeedPage: FC<FeedEntryType> = ({
  title,
  date,
  body,
  image,
  image: { caption } = { caption: '' }, // to appease jsx-a11y/img-redundant-alt
}) => {
  return (
    <>
      <Navigation />
      <main className={classNames(styles['feed'], styles['feed__entry'])}>
        <div className={styles['feed__info']}>
          <time dateTime={date}>{date}</time>
          <h2>{title}</h2>
          {image && (
            <img
              src={image.src}
              alt={caption}
              width={image.width}
              height={image.height}
            />
          )}
        </div>
        <Markdown className={styles['feed__body']} body={body} />
      </main>
    </>
  );
};

export default FeedPage;
