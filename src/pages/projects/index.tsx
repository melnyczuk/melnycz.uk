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
          {projects.map(({ name, hero, body, year }) => (
            <article
              id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
              key={name}
              className={styles['project']}
            >
              <div className={styles['project__info']}>
                <time dateTime={`${year}`}>{year}</time>
                <h2>{name}</h2>
              </div>
              <Markdown className={styles['project__text']} body={body} />
              <div
                className={styles['project__gallery_button']}
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
            </article>
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
