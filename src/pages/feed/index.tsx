import { GetStaticProps } from 'next';
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
      entries: feed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    },
  };
};

const FeedPage: FC<FeedProps> = ({ entries }) => {
  return (
    <>
      <Navigation />
      <main className={styles['feed']}>
        <ul>
          {entries.map(
            ({
              title,
              date,
              body,
              image,
              image: { caption } = { caption: '' }, // to appease jsx-a11y/img-redundant-alt
            }) => (
              <li id={date} key={date}>
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
              </li>
            )
          )}
        </ul>
      </main>
    </>
  );
};

export default FeedPage;
