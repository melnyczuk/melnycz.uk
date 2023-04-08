import { GetStaticProps } from 'next';
import { FC } from 'react';

import { getImageType, Image, Markdown } from '../../components';
import { projects } from '../../content';
import { ProjectType } from '../../types';
import styles from './projects.module.scss';

type ProjectsProps = {
  projects: ProjectType[];
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: await Promise.all(
        projects
          .filter(({ hide }) => !hide)
          .map(async ({ name, year, hero, description }) => ({
            name,
            year,
            description,
            image: await getImageType(hero),
          }))
      ),
    },
  };
};

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <main className={styles['projects']}>
    {projects.map(({ name, image, description, year }) => (
      <div key={name} className={styles['project']}>
        <h2 className={styles['project__title']}>{name}</h2>
        <h3 className={styles['project__year']}>{year}</h3>
        <Markdown className={styles['project__text']} content={description} />
        <Image
          className={styles['project__image']}
          name={image.name}
          src={image.src}
          width={image.width}
          height={image.height}
          thumbnail={image.thumbnail}
        />
      </div>
    ))}
  </main>
);

export default Projects;
