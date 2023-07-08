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
            <a key={slug} href={`/writing/${slug}`}>
              <li>
                <span className={styles['writing_index__date']}>{date}</span>
                <span className={styles['writing_index__title']}>{title}</span>
              </li>
            </a>
          ))}
        </ul>
      </main>
    </>
  );
};

export default WritingIndexPage;
