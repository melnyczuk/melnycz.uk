import { FC } from 'react';

import { getGetStaticProps } from '../../apollo';
import { Image, Markdown } from '../../components';
import { ProjectType } from '../../types';

import query from './projects.graphql';
import styles from './projects.module.scss';

type ProjectsProps = {
  projects: ProjectType[];
};

export const getStaticProps = getGetStaticProps<ProjectsProps>(query);

const sortHeroImagesToFront = ({ hero: a }, { hero: b }) =>
  (a && -1) || (b && 1) || 0;

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <main className={styles['projects']}>
    {projects
      .filter(({ hide }) => !hide)
      .map(({ id, name, imageSet, description, year }) => {
        const [
          { name: imgName, thumbnail, url, width, height },
        ] = imageSet
          .filter(({ hide, url }) => !hide && url)
          .sort(sortHeroImagesToFront);

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

export default Projects;
