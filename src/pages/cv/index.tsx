import classnames from 'classnames';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { Markdown } from '../../components';
import { cv } from '../../content';
import { CvType } from '../../types';
import styles from './cv.module.scss';

export const getStaticProps: GetStaticProps<CvType> = async () => ({
  props: cv,
});

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
      body={about}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__contact'])}
      body={contact}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__education'])}
      body={education}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__jobs'])}
      body={jobs}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__projects'])}
      body={projects}
    />
    <Markdown
      className={classnames(styles['cv__item'], styles['cv__skills'])}
      body={skills}
    />
  </main>
);

export default CvPage;
