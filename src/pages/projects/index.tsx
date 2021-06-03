import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';

import apollo from '../../apollo';
import { Image, Markdown } from '../../components';
import { ProjectType } from '../../types';

import projectsPageQuery from './projects.graphql';
import styles from './projects.module.scss';

type ProjectPageProps = {
  projects: ProjectType[];
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async () => {
  const { data } = await apollo.query({
    query: gql`
      ${projectsPageQuery}
    `,
  });
  return { props: data };
};

const sortHeroImagesToFront = ({ hero: a }, { hero: b }) =>
  (a && -1) || (b && 1) || 0;

const ProjectPage: FC<ProjectPageProps> = ({ projects }) => (
  <main className={styles['projects']}>
    {projects
      .filter(({ hide }) => !hide)
      .map(({ id, name, imageSet, description, year }) => {
        const [
          { name: imgName, thumbnail, url, width, height },
        ] = imageSet.filter(({ hide }) => !hide).sort(sortHeroImagesToFront);

        return (
          <div key={id} className={styles['project']}>
            <h2 className={styles['project__title']}>{name}</h2>
            <h3 className={styles['project__year']}>
              {new Date(year).getFullYear()}
            </h3>
            <Markdown
              className={styles['project__text']}
              content={description}
            />
            <Image
              className={styles['project__image']}
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
);

export default ProjectPage;
