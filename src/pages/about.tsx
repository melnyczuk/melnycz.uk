import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import remarkReact from 'remark-react';
import remark from 'remark';

import { ClipboardCopyButton } from '../components';
import {
  BioType,
  EducationType,
  ExhibitionType,
  JobType,
  ResidencyType,
} from '../types';
import { sortChronologicallyBy, formatMonthRange } from '../utils';

import './about.scss';

type AboutPageProps = PageProps & {
  data: {
    folio: {
      bio: BioType;
      links: Record<'id' | 'name' | 'url', string>[];
      contact: Record<string, string>;
      educations: EducationType[];
      exhibitions: ExhibitionType[];
      jobs: JobType[];
      residencies: ResidencyType[];
    };
  };
};

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    folio {
      bio {
        short
        long
      }
      links {
        id
        name
        url
      }
      educations {
        id
        course
        institution
        startDate
        endDate
      }
      exhibitions {
        id
        location
        space
        startDate
      }
      residencies {
        id
        name
        location
        description
        startDate
        endDate
      }
      jobs {
        id
        team
        company
        startDate
        endDate
      }
    }
  }
`;

const AboutPage: FC<AboutPageProps> = ({ data }) => {
  const { bio, links, educations, exhibitions, residencies, jobs } = data.folio;
  return (
    <main className="about">
      <div className="about__bio">
        <div className="text about__item">
          <h2>Contact</h2>
          <p>@melnyczuk</p>
          <p>
            Email:{' '}
            <a href={'mailto:h.melnyczuk@gmail.com'}>h.melnyczuk@gmail.com</a>{' '}
            <ClipboardCopyButton content="h.melnyczuk@gmail.com">
              <span className="emoji" aria-label="copy to clipboard" role="img">
                📋
              </span>
            </ClipboardCopyButton>
          </p>
        </div>
        <ul className="text about__item">
          {links.map(({ id, name, url }) => (
            <li className="link-list" key={id}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
        <div className="text about__item">
          <h2>About</h2>
          <div className="text">
            {remark().use(remarkReact).processSync(bio.long).result}
          </div>
        </div>
      </div>
      <div className="about__cv">
        <div className="about__item">
          <h2>Exhibitions</h2>
          <ul>
            {exhibitions
              .sort(sortChronologicallyBy('startDate'))
              .map(({ id, space, location, startDate }) => (
                <li key={id}>
                  {new Date(startDate).getFullYear()}&emsp;{space}, {location}
                </li>
              ))}
          </ul>
        </div>
        <div className="about__item">
          <h2>Residencies</h2>
          <ul>
            {residencies
              .sort(sortChronologicallyBy('startDate'))
              .map(({ id, name, location, startDate }) => (
                <li key={id}>
                  {new Date(startDate).getFullYear()}&emsp;{name}, {location}
                </li>
              ))}
          </ul>
        </div>
        <div className="about__item">
          <h2>Dev Work</h2>
          <ul>
            {jobs
              .sort(sortChronologicallyBy('startDate'))
              .map(({ id, team, company, startDate, endDate }) => (
                <li key={id}>
                  {formatMonthRange(startDate, endDate)}&emsp;{company}
                  {!!team && ` (${team})`}
                </li>
              ))}
          </ul>
        </div>
        <div className="about__item">
          <h2>Education</h2>
          {educations.map(({ id, course, institution, startDate, endDate }) => (
            <div key={id} className="education">
              <p>{course}</p>
              <p>{institution}</p>
              <p>{formatMonthRange(startDate, endDate)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
