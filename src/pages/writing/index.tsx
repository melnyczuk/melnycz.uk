import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { Navigation } from '../../components';
import { writing } from '../../content';
import { ImageType } from '../../types';
import styles from './writing.module.scss';

type WrtingPostIndexType = {
  slug: string;
  date: string;
  title: string;
  image: ImageType;
};

type WritingIndexProps = {
  posts: Omit<WrtingPostIndexType, 'image'>[];
};

export const getStaticProps: GetStaticProps<WritingIndexProps> = async () => {
  return {
    props: {
      posts: writing,
    },
  };
};

const WritingIndexPage: FC<WritingIndexProps> = ({ posts }) => {
  return (
    <>
      <Navigation />
      <main className={styles['writing_index']}>
        <ul>
          {posts.map(({ slug, title, date }) => (
            <li key={slug}>
              <Link
                href={`/writing/${slug}`}
                className={styles['writing_index__item']}
              >
                <time dateTime={date}>{date}</time>
                <h2>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default WritingIndexPage;
