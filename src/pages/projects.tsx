import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

import { Navigation, Project } from '../components';
import { ProjectType } from '../types';

import './pages.scss';

type ProjectPageProps = PageProps & {
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
        hide
        images {
          name
          url
        }
        texts {
          name
          url
        }
      }
    }
  }
`;

const yearSort = ({ year: a }, { year: b }): number =>
  new Date(b).valueOf() - new Date(a).valueOf();

const ProjectPage: FC<ProjectPageProps> = ({ data, path }) => (
  <>
    <Navigation path={path} />
    <main className="projects-page">
      {data.folio.projects.sort(yearSort).map(({ name, ...props }) => (
        <Project key={name} name={name} {...props} />
      ))}
    </main>
  </>
);

export default ProjectPage;
