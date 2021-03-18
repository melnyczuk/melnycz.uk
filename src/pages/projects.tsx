import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

import { Navigation, Project } from '../components';
import { ProjectType } from '../types';

import './pages.scss';

const yearSort = ({ year: a }, { year: b }): number =>
  new Date(b).valueOf() - new Date(a).valueOf();

type ProjectPageQueryType = {
  data: {
    folio: {
      projects: ProjectType[];
    };
  };
};

export const projectPageQuery = graphql`
  query ProjectPageQuery {
    folio {
      projects {
        name
        year
        images {
          name
          url
        }
        text {
          name
          url
        }
      }
    }
  }
`;

type ProjectPageProps = PageProps & ProjectPageQueryType;

const ProjectPage: FC<ProjectPageProps> = ({ data, path }) => (
  <>
    <Navigation path={path} />
    <main className="projects-page">
      {data.folio.projects
        .sort(yearSort)
        .filter(({ text, images }) => text && images)
        .map(({ name, year, images, text }) => (
          <Project
            key={name}
            name={name}
            year={year}
            images={images}
            text={text}
          />
        ))}
    </main>
  </>
);

export default ProjectPage;
