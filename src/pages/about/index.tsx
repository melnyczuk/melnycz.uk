import classNames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { ClipboardCopyButton, Markdown } from '../../components';
import content, { AboutType } from '../../content/about';
import styles from './about.module.scss';

type AboutProps = AboutType;

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const resp = await fetch(content.bio);
  const bio = await resp.text();
  return { props: { ...content, bio } };
};

const About: FC<AboutProps> = ({
  bio,
  links,
  educations,
  exhibitions,
  residencies,
}) => (
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
      <div className={classNames(styles['about__item'], styles['flex'])}>
        {links.map(({ name, url }) => (
          <a key={name} className={styles['link']} href={url}>
            {name}
          </a>
        ))}
      </div>
      <div className={styles['about__item']}>
        <Markdown content={bio} />
      </div>
    </div>
    <div className={styles['about__cv']}>
      <div
        className={classNames(
          styles['about__item'],
          styles['about__item__list']
        )}
      >
        <h2 className={styles['about__item__list--full']}>Exhibitions</h2>
        <ul className={styles.list}>
          {exhibitions.map(([year, name]) => (
            <li key={name.replaceAll(' ', '_').replaceAll(',', '')}>
              <span className={styles['about__item__list--left']}>{year}</span>
              <span className={styles['about__item__list--right']}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={classNames(
          styles['about__item'],
          styles['about__item__list']
        )}
      >
        <h2 className={styles['about__item__list--full']}>Residencies</h2>
        <ul className={styles.list}>
          {residencies.map(([year, name]) => (
            <li key={name}>
              <span className={styles['about__item__list--left']}>{year}</span>
              <span className={styles['about__item__list--right']}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={classNames(
          styles['about__item'],
          styles['about__item__list']
        )}
      >
        <h2 className={styles['about__item__list--full']}>Education</h2>
        <ul className={styles.list}>
          {educations.map(([year, course, institution]) => (
            <li key={course}>
              <span className={styles['about__item__list--left']}>{year}</span>
              <span className={styles['about__item__list--right']}>
                {course}, {institution}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
);

export default About;
