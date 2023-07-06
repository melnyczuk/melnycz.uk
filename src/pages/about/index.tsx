import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { ClipboardCopyButton, Markdown, Navigation } from '../../components';
import { about } from '../../content';
import { AboutType } from '../../types';
import styles from './about.module.scss';

export const getStaticProps: GetStaticProps<AboutType> = async () => {
  return { props: about };
};

const AboutPage: FC<AboutType> = ({
  body,
  links,
  educations,
  exhibitions,
  residencies,
}) => (
  <>
    <Navigation />
    <main className={styles['about']}>
      <div className={styles['about__bio']}>
        <div className={styles['about__item']}>
          <h2>Contact</h2>
          <p>@melnyczuk</p>
          <p className={styles['flex']}>
            Email:
            <a className={styles['link']} href={'mailto:h.melnyczuk@gmail.com'}>
              h.melnyczuk@gmail.com
            </a>
            <ClipboardCopyButton content="h.melnyczuk@gmail.com">
              <span aria-label="copy to clipboard" role="img">
                📋
              </span>
            </ClipboardCopyButton>
          </p>
        </div>
        <div className={classnames(styles['about__item'], styles['flex'])}>
          {links.map(({ name, url }) => (
            <a key={name} className={styles['link']} href={url}>
              {name}
            </a>
          ))}
        </div>
        <div className={styles['about__item']}>
          <Markdown body={body} />
        </div>
      </div>
      <div className={styles['about__cv']}>
        <div
          className={classnames(
            styles['about__item'],
            styles['about__item__list']
          )}
        >
          <h2 className={styles['about__item__list--full']}>Exhibitions</h2>
          <ul className={styles.list}>
            {exhibitions.map(([year, name]) => (
              <li key={name.replaceAll(' ', '_').replaceAll(',', '')}>
                <span className={styles['about__item__list--left']}>
                  {year}
                </span>
                <span className={styles['about__item__list--right']}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classnames(
            styles['about__item'],
            styles['about__item__list']
          )}
        >
          <h2 className={styles['about__item__list--full']}>Residencies</h2>
          <ul className={styles.list}>
            {residencies.map(([year, name]) => (
              <li key={name}>
                <span className={styles['about__item__list--left']}>
                  {year}
                </span>
                <span className={styles['about__item__list--right']}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classnames(
            styles['about__item'],
            styles['about__item__list']
          )}
        >
          <h2 className={styles['about__item__list--full']}>Education</h2>
          <ul className={styles.list}>
            {educations.map(([year, course, institution]) => (
              <li key={course}>
                <span className={styles['about__item__list--left']}>
                  {year}
                </span>
                <span className={styles['about__item__list--right']}>
                  {course}, {institution}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  </>
);

export default AboutPage;
