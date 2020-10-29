import React, { FC } from 'react';
import Head from 'next/head';
import { info, education, experience, tech } from '../../../static/cv.json';

import './CV.scss';

const Date: FC<{ dates: string[] }> = ({ dates }) => (
  <span className="cv__date">{`${dates[0]}—${dates[1]}`}</span>
);

const CV: FC = () => (
  <>
    <Head>
      <title>Howard Melnyczuk CV</title>
    </Head>
    <div className="cv">
      <article>
        <span className="cv__info__name">{info.name}</span>
        <br />
        <span className="cv__info__born">b, {info.born}</span>
        <br />
        <span>{info.email}</span>
        <br />
      </article>
      <br />

      <article>
        <h3>Experience</h3>
        {experience.map(
          ({ company, dates, description, job, responsibilities, team }) => (
            <div key={`${company}-${team}`}>
              <Date dates={dates} />
              <br />
              <span className="cv__title">{`${job}, ${company}${
                team ? `: ${team}` : ''
              }`}</span>
              <br />
              <p>{description}</p>
              <h4>Key Responsibilities</h4>
              <ul>
                {responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <br />
            </div>
          )
        )}
      </article>
      <br />

      <article>
        <h3>Education</h3>
        {education.map(({ course, dates, institution, university, grade }) => (
          <div key={`${university}-${institution}-${course}`}>
            <Date dates={dates} />
            <br />
            <span className="cv__title">{course}</span>
            <br />
            <span>{institution}</span>
            <br />
            <span>{university}</span>
            <br />
            <span>{grade}</span>
            <br />
            <br />
          </div>
        ))}
      </article>
      <br />

      <article>
        <h3>Tech</h3>
        {tech.map(([key, items]: [string, string[]]) => (
          <div key={key}>
            <h4>{key}</h4>
            <ul className="cv__tech-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </article>
    </div>
  </>
);

export default CV;
