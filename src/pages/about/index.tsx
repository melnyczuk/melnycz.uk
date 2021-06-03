import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';

import apollo from '../../apollo';
import { ClipboardCopyButton, Markdown } from '../../components';
import {
  BioType,
  EducationType,
  ExhibitionType,
  JobType,
  ResidencyType,
} from '../../types';
import { formatMonthRange } from '../../utils';

import aboutPageQuery from './about.graphql';
import styles from './about.module.scss';

type AboutPageProps = {
  bio: BioType;
  links: Record<'id' | 'name' | 'url', string>[];
  contact: Record<string, string>;
  educations: EducationType[];
  exhibitions: ExhibitionType[];
  jobs: JobType[];
  residencies: ResidencyType[];
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const { data } = await apollo.query({
    query: gql`
      ${aboutPageQuery}
    `,
  });
  return { props: data };
};

const AboutPage: FC<AboutPageProps> = ({
  bio,
  links,
  educations,
  exhibitions,
  residencies,
  jobs,
}) => (
  <main className={styles['about']}>
    <div className={styles['about__bio']}>
      <div className={styles['about__item']}>
        <h2>Contact</h2>
        <p>@melnyczuk</p>
        <p>
          Email:{' '}
          <a href={'mailto:h.melnyczuk@gmail.com'}>h.melnyczuk@gmail.com</a>{' '}
          <ClipboardCopyButton content="h.melnyczuk@gmail.com">
            <span aria-label="copy to clipboard" role="img">
              📋
            </span>
          </ClipboardCopyButton>
        </p>
      </div>
      <ul className={styles['about__item']}>
        {links.map(({ id, name, url }) => (
          <li className={styles['link-list']} key={id}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
      <div className={styles['about__item']}>
        <h2>About</h2>
        <Markdown content={bio.long} />
      </div>
    </div>
    <div className={styles['about__cv']}>
      <div className={styles['about__item']}>
        <h2>Exhibitions</h2>
        <ul>
          {exhibitions.map(({ id, space, location, startDate }) => (
            <li key={id}>
              {new Date(startDate).getFullYear()}&emsp;{space}, {location}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['about__item']}>
        <h2>Residencies</h2>
        <ul>
          {residencies.map(({ id, name, location, startDate }) => (
            <li key={id}>
              {new Date(startDate).getFullYear()}&emsp;{name}, {location}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['about__item']}>
        <h2>Dev Work</h2>
        <ul>
          {jobs.map(({ id, team, company, startDate, endDate }) => (
            <li key={id}>
              {formatMonthRange(startDate, endDate)}&emsp;{company}
              {!!team && ` (${team})`}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['about__item']}>
        <h2>Education</h2>
        {educations.map(({ id, course, institution, startDate, endDate }) => (
          <div key={id} className={styles['education']}>
            <p>{course}</p>
            <p>{institution}</p>
            <p>{formatMonthRange(startDate, endDate)}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default AboutPage;
