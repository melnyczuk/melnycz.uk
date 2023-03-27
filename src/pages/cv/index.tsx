import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown } from '../../components';
import content from '../../content/cv';
import { RemoteContentType } from '../../types';
import { fetchRemoteContent } from '../../utils';
import styles from './cv.module.scss';

type CVPropsKey = keyof typeof content;
type CVProps = Record<CVPropsKey, RemoteContentType>;

export const getStaticProps: GetStaticProps<CVProps> = async () => ({
  props: Object.fromEntries(
    await Promise.all(
      Object.keys(content).map(async (key) => [
        key,
        { url: content[key], local: await fetchRemoteContent(content[key]) },
      ])
    )
  ),
});

const CV: FC<CVProps> = ({
  about,
  contact,
  education,
  jobs,
  projects,
  skills,
}: CVProps) => (
  <main className={styles['cv']}>
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__about'])}
      {...about}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__contact'])}
      {...contact}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__education'])}
      {...education}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__jobs'])}
      {...jobs}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__projects'])}
      {...projects}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__skills'])}
      {...skills}
    />
  </main>
);

export default CV;
