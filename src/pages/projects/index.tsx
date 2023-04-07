import { GetStaticProps } from 'next';
import { FC } from 'react';

import { getImageType, Image, Markdown } from '../../components';
import Dropbox from '../../dropbox';
import { ProjectType } from '../../types';
import styles from './projects.module.scss';

type ProjectsProps = {
  projects: ProjectType[];
};

type ProjectInfo = {
  slug: string;
  name: string;
  year: number;
  hide: boolean;
  hero: string;
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const dropbox = new Dropbox();
  const entries = await dropbox.listDir('/content/projects');
  const dirs = entries.filter((e) => e['.tag'] === 'folder');
  const infoFile = dropbox.filterFiles(entries, 'info.json')[0];
  if (!infoFile.path_lower) throw new Error('Project info json is missing');
  const infoJson = await dropbox.fetch(infoFile.path_lower);
  const info: { projects: ProjectInfo[] } = JSON.parse(infoJson);
  const files = dropbox.filterFiles(entries);

  const projects = await Promise.all(
    info.projects.reduce<Array<Promise<ProjectType>>>(
      (acc, { name, year, slug, hero, hide }) => {
        if (hide) {
          return acc;
        }

        const [{ path_lower: dirPath }] = dirs.filter(
          (dir) => dir.name === slug
        );

        if (!dirPath) {
          return acc;
        }

        const projectFiles = files.filter(
          (e) =>
            e['.tag'] === 'file' &&
            e.path_lower &&
            e.path_lower.includes(dirPath)
        );

        const [{ path_lower: descPath }] = projectFiles.filter((e) =>
          e.name.includes('.md')
        );

        if (!descPath) {
          return acc;
        }

        const images = projectFiles.filter(
          (e) => !e.name.includes('.md') && !e.name.includes('.json')
        );

        const [{ path_lower: heroPath }] = images.filter((img) =>
          img.name.includes(hero)
        );

        if (!heroPath) {
          return acc;
        }

        return [
          ...acc,
          new Promise<ProjectType>((resolve) =>
            dropbox.fetch(descPath).then(async (description) => {
              const imgUrl = await dropbox.getLink(heroPath);
              const image = await getImageType(imgUrl);
              resolve({ name, description, image, year });
            })
          ),
        ];
      },
      []
    )
  );

  return { props: { projects } };
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
