import { GetStaticProps } from 'next';
import { FC, useMemo, useState } from 'react';

import { Gallery, Image, Markdown } from '../../components';
import { projects } from '../../content';
import { ProjectType } from '../../types';
import styles from './projects.module.scss';

type ProjectsProps = { projects: ProjectType[] };

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => ({
  props: { projects },
});

const ProjectsPage: FC<ProjectsProps> = ({ projects }) => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  const galleryImages = useMemo(() => {
    if (openGallery === null) {
      return null;
    }
    const [{ images = [] } = { images: [] }] = projects.filter(
      ({ name }) => name === openGallery
    );
    return images;
  }, [projects, openGallery]);

  return (
    <main className={styles['projects']}>
      {projects.map(({ name, hero, description, year }) => (
        <div key={name} className={styles['project']}>
          <h2 className={styles['project__title']}>{name}</h2>
          <h3 className={styles['project__year']}>{year}</h3>
          <Markdown className={styles['project__text']} content={description} />
          <div
            tabIndex={0}
            role="button"
            aria-label="open image gallery"
            onKeyDown={() => setOpenGallery(name)}
            onClick={() => setOpenGallery(name)}
          >
            <Image
              className={styles['project__image']}
              name={hero.name}
              src={hero.src}
              width={hero.width}
              height={hero.height}
              thumbnail={hero.thumbnail}
            />
          </div>
        </div>
      ))}
      {galleryImages !== null && (
        <Gallery images={galleryImages} onClose={() => setOpenGallery(null)} />
      )}
    </main>
  );
};

export default ProjectsPage;
