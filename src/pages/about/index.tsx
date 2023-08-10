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
      <div className={styles['about__about']}>
        <h2>About</h2>
        <Markdown body={body} />
      </div>
      <div className={styles['about__contact']}>
        <h2>Contact</h2>
        <p>@melnyczuk</p>
        <p className={styles['flex']}>
          Email me:
          <a href={'mailto:how@melnycz.uk'}>how@melnycz.uk</a>
          <ClipboardCopyButton content="how@melnycz.uk">
            <span aria-label="copy to clipboard" role="img">
              📋
            </span>
          </ClipboardCopyButton>
        </p>
        <p className={styles['flex']}>
          Subscribe:
          <a href="/rss">RSS</a>
          <ClipboardCopyButton content="https://melnycz.uk/rss">
            <span aria-label="copy to clipboard" role="img">
              📋
            </span>
          </ClipboardCopyButton>
        </p>
        <div className={styles['flex']}>
          {links.map(({ name, url }) => (
            <a key={name} href={url}>
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className={styles['about__exhibitions']}>
        <h2>Exhibitions</h2>
        <table>
          {exhibitions.map(([year, name]) => (
            <tr key={name.replaceAll(' ', '_').replaceAll(',', '')}>
              <td>{year}</td>
              <td>{name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles['about__residencies']}>
        <h2>Residencies</h2>
        <table>
          {residencies.map(([year, name]) => (
            <tr key={name}>
              <td>{year}</td>
              <td>{name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles['about__education']}>
        <h2>Education</h2>
        <table>
          {educations.map(([year, course, institution]) => (
            <tr key={course}>
              <td>{year}</td>
              <td>
                {course}, {institution}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </main>
  </>
);

export default AboutPage;
