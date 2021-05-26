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

type ProjectPageProps = PageProps & ProjectPageQueryType;

const ProjectPage: FC<ProjectPageProps> = ({ data, path }) => (
  <>
    <Navigation path={path} />
    <main className="projects-page">
      {data.folio.projects
        .sort(yearSort)
        .filter(({ texts, images }) => texts && images)
        .map(({ name, year, images, texts }) => (
          <Project
            key={name}
            name={name}
            year={year}
            images={images}
            texts={texts}
          />
        ))}
    </main>
  </>
);

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
        texts {
          name
          url
        }
      }
    }
  }
`;

export default ProjectPage;
