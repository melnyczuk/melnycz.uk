import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

import { Navigation, Project } from '../components';
import { ProjectType } from '../types';

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

const ProjectPage: FC<ProjectPageProps> = ({ path, data }) => {
  console.log('scroll', document.scrollingElement);
  return (
    <>
      <Navigation path={path} />
      <main className="projects-page">
        <div className="projects-page__left" />
        <div className="projects-page__right" />
        {data.folio.projects
          .sort(yearSort)
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
};

export default ProjectPage;
