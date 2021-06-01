import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import { Image, Markdown } from '../components';
import { ProjectType } from '../types';

import './projects.scss';

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
        id
        name
        year
        hide
        description
        imageSet {
          name
          url
        }
      }
    }
  }
`;

const ProjectPage: FC<ProjectPageProps> = ({ data }) => (
  <main className="projects">
    {data.folio.projects
      .filter(({ hide }) => !hide)
      .map(({ id, name, imageSet, description, year }) => (
        <div key={id} className="project">
          <h2 className="project__title">{name}</h2>
          <h3 className="project__year">{new Date(year).getFullYear()}</h3>
          <Markdown className="project__text" content={description} />
          <Image
            className="project__image"
            name={imageSet[0].name}
            url={imageSet[0].url}
          />
        </div>
      ))}
  </main>
);

export default ProjectPage;
