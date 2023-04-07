import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown } from '../../components';
import Dropbox from '../../dropbox';
import styles from './cv.module.scss';

type CVProps = {
  about: string;
  contact: string;
  education: string;
  jobs: string;
  projects: string;
  skills: string;
};

export const getStaticProps: GetStaticProps<CVProps> = async () => {
  const dropbox = new Dropbox();
  const entries = await dropbox.listDir('/content/cv');
  const files = dropbox.filterFiles(entries, '.md');
  const content = await Promise.all(
    files.map<Promise<[string, string]>>(async ({ name, path_lower = '' }) => [
      name.split('.md')[0],
      await dropbox.fetch(path_lower),
    ])
  );
  const props = Object.fromEntries(content) as CVProps;
  return { props };
};

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
      content={about}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__contact'])}
      content={contact}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__education'])}
      content={education}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__jobs'])}
      content={jobs}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__projects'])}
      content={projects}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__skills'])}
      content={skills}
    />
  </main>
);

export default CV;
