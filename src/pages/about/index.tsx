import { GetStaticProps } from 'next';
import { FC } from 'react';

import { ClipboardCopyButton, Markdown, Navigation } from '../../components';
import { about } from '../../content';
import { AboutType } from '../../types';
import styles from './about.module.scss';

export const getStaticProps: GetStaticProps<AboutType> = async () => {
  return { props: about };
};

const AboutPage: FC<AboutType> = ({ body, links }) => (
  <>
    <Navigation />
    <main className={styles['about']}>
      <div className={styles['about__about']}>
        <h2>About</h2>
        <Markdown body={body} />
      </div>
      <div className={styles['about__contact']}>
        <h2>Contact</h2>
        <div className={styles['flex']}>
          {links.map(({ name, url }) => (
            <a key={name} href={url}>
              {name}
            </a>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default AboutPage;
