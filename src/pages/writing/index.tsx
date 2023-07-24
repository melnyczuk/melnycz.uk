import classnames from 'classnames';
import { GetStaticProps } from 'next';
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
      posts: writing.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
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
              <a
                href={`/writing/${slug}`}
                className={styles['writing_index__item']}
              >
                <time dateTime={date}>{date}</time>
                <h2>{title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default WritingIndexPage;
