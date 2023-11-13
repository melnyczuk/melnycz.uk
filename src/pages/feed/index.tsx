import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { Markdown, Navigation } from '../../components';
import { feed } from '../../content';
import { FeedEntryType } from '../../types';
import styles from './feed.module.scss';

type FeedProps = {
  entries: FeedEntryType[];
};

export const getStaticProps: GetStaticProps<FeedProps> = async () => {
  return {
    props: {
      entries: feed,
    },
  };
};

const FeedPage: FC<FeedProps> = ({ entries }) => {
  return (
    <>
      <Navigation />
      <main className={styles['feed']}>
        <ul className={styles['feed__list']}>
          {entries.map(
            ({
              title,
              date,
              body,
              image,
              image: { caption } = { caption: '' }, // to appease jsx-a11y/img-redundant-alt
            }) => (
              <li id={date} key={date} className={styles['feed__entry']}>
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
                  <Link href={`/feed/${date}`}>Link</Link>
                </div>
                <Markdown className={styles['feed__body']} body={body} />
              </li>
            )
          )}
        </ul>
      </main>
    </>
  );
};

export default FeedPage;
