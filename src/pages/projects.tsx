import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import { Image, Layout, Markdown } from '../components';
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
          hero
          hide
          url
          thumbnail
          width
          height
        }
      }
    }
  }
`;

const sortHeroImagesToFront = ({ hero: a }, { hero: b }) =>
  (a && -1) || (b && 1) || 0;

const ProjectPage: FC<ProjectPageProps> = ({ data, path }) => (
  <Layout path={path}>
    <main className="projects">
      {data.folio.projects
        .filter(({ hide }) => !hide)
        .map(({ id, name, imageSet, description, year }) => {
          const [
            { name: imgName, thumbnail, url, width, height },
          ] = imageSet.filter(({ hide }) => !hide).sort(sortHeroImagesToFront);

          return (
            <div key={id} className="project">
              <h2 className="project__title">{name}</h2>
              <h3 className="project__year">{new Date(year).getFullYear()}</h3>
              <Markdown className="project__text" content={description} />
              <Image
                className="project__image"
                name={imgName}
                url={url}
                width={width}
                height={height}
                thumbnail={thumbnail}
              />
            </div>
          );
        })}
    </main>
  </Layout>
);

export default ProjectPage;
