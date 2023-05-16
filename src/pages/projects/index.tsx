import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC, useMemo, useState } from 'react';

import { Gallery, Image, Markdown, Navigation } from '../../components';
import { projects } from '../../content';
import { ProjectType } from '../../types';
import styles from './projects.module.scss';

type ProjectsProps = { projects: ProjectType[] };

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => ({
  props: { projects },
});

const ProjectsPage: FC<ProjectsProps> = ({ projects }) => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  const galleryImages = useMemo(
    () =>
      openGallery === null
        ? null
        : projects.filter(({ name }) => name === openGallery)?.[0]?.images ||
          [],
    [projects, openGallery]
  );

  return (
    <>
      <Navigation className={classnames(openGallery && styles['nav--blur'])} />
      <main className={styles['projects']}>
        <section
          className={classnames(
            styles['projects__list'],
            openGallery && styles['projects__list--blur']
          )}
        >
          {projects.map(({ name, hero, description, year }) => (
            <div key={name} className={styles['project']}>
              <h2 className={styles['project__title']}>{name}</h2>
              <h3 className={styles['project__year']}>{year}</h3>
              <Markdown
                className={styles['project__text']}
                content={description}
              />
              <Image
                className={styles['project__image']}
                name={hero.name}
                src={hero.src}
                width={hero.width}
                height={hero.height}
                thumbnail={hero.thumbnail}
                tabIndex={0}
                role="button"
                aria-label="open image gallery"
                onKeyDown={() => setOpenGallery(name)}
                onClick={() => setOpenGallery(name)}
              />
            </div>
          ))}
        </section>
        {galleryImages !== null && (
          <section className={styles['projects__gallery']}>
            <Gallery
              images={galleryImages}
              onClose={() => setOpenGallery(null)}
            />
          </section>
        )}
      </main>
    </>
  );
};

export default ProjectsPage;
