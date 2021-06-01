import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

import { Image, Text } from '../components';
import { sortChronologicallyBy } from '../utils';
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
        imageSet {
          name
          url
        }
        textSet {
          url
        }
      }
    }
  }
`;

const ProjectPage: FC<ProjectPageProps> = ({ data }) => (
  <main className="projects">
    {data.folio.projects
      .sort(sortChronologicallyBy('year'))
      .filter(({ hide, imageSet, textSet }) => !hide && textSet && imageSet)
      .map(({ id, name, imageSet, textSet, year }) => (
        <div key={id} className="project">
          <h2 className="project__title">{name}</h2>
          <h3 className="project__year">{new Date(year).getFullYear()}</h3>
          <Text className="project__text" url={textSet[0].url} />
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
