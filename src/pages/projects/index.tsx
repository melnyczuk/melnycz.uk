import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Image, Markdown } from '../../components';
import content from '../../content/projects';
import { ProjectType, RemoteContentType } from '../../types';
import styles from './projects.module.scss';

type ProjectsProps = {
  projects: (Omit<ProjectType, 'description'> & {
    description: RemoteContentType;
  })[];
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => ({
  props: {
    projects: await Promise.all(
      content.map(async ({ description: url, name, ...rest }) => {
        const resp = await fetch(url);
        const content = await resp.text();
        return { ...rest, name, description: { content, url } };
      })
    ),
  },
});

const Projects: FC<ProjectsProps> = ({ projects }) => (
  <main className={styles['projects']}>
    {projects.map(({ name, image, description, year }) => (
      <div key={name} className={styles['project']}>
        <h2 className={styles['project__title']}>{name}</h2>
        <h3 className={styles['project__year']}>{year}</h3>
        <Markdown
          className={styles['project__text']}
          content={description.content}
          remote={description.url}
        />
        <Image
          className={styles['project__image']}
          name={image.name}
          url={image.url}
          width={image.width}
          height={image.height}
          thumbnail={image.thumbnail}
        />
      </div>
    ))}
  </main>
);

export default Projects;
