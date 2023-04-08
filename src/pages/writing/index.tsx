import classNames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

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
    <main className={styles['writing_index']}>
      <ul className={styles['writing_post_list']}>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className={styles['writing_post_list__item']}>
            <a
              className={classNames(styles['flex'], styles['a'])}
              href={`/writing/${slug}`}
            >
              <span className={styles['writing_post_list__item__date']}>
                {date}
              </span>
              <span className={styles['writing_post_list__item__link']}>
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default WritingIndexPage;
