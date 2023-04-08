import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown } from '../../components';
import { cv } from '../../content';
import { CvType } from '../../types';
import styles from './cv.module.scss';

export const getStaticProps: GetStaticProps<CvType> = async () => {
  return { props: cv };
};

const CvPage: FC<CvType> = ({
  about,
  contact,
  education,
  jobs,
  projects,
  skills,
}) => (
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

export default CvPage;
