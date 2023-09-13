import classnames from 'classnames';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useMemo, useState } from 'react';

import { Gallery, Image, Markdown, Navigation } from '../../components';
import { projects } from '../../content';
import { ProjectType } from '../../types';
import styles from './projects.module.scss';

type ProjectDetailPageProps = ProjectType;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map(({ slug }) => ({ params: { project: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectDetailPageProps> = async (
  ctx
) => ({ props: projects.filter((p) => p.slug === ctx?.params?.project)[0] });

const ProjectDetailPage: FC<ProjectDetailPageProps> = ({
  name,
  body,
  year,
  images,
}) => {
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  const galleryImage = useMemo(
    () => images.find(({ name }) => name === openGallery) ?? null,
    [images, openGallery]
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
          <article
            id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
            key={name}
            className={styles['project']}
          >
            <div className={styles['project__info']}>
              <time dateTime={`${year}`}>{year}</time>
              <h2>{name}</h2>
            </div>
            <Markdown
              className={classnames(
                styles['project__text'],
                styles['project__text--sticky']
              )}
              body={body}
            />
            <div className={styles['project__image_list']}>
              {images.map((img) => (
                <div
                  key={img.name}
                  tabIndex={0}
                  role="button"
                  aria-label="open image gallery"
                  onKeyDown={() => setOpenGallery(img.name)}
                  onClick={() => setOpenGallery(img.name)}
                >
                  <Image
                    className={styles['project__image']}
                    name={img.name}
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    thumbnail={img.thumbnail}
                  />
                </div>
              ))}
            </div>
          </article>
        </section>
        {galleryImage !== null && (
          <section className={styles['projects__gallery']}>
            <Gallery
              images={[galleryImage]}
              onClose={() => setOpenGallery(null)}
            />
          </section>
        )}
      </main>
    </>
  );
};

export default ProjectDetailPage;
