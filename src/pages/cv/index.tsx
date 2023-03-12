import classnames from 'classnames';
import { FC } from 'react';

import { Markdown } from '../../components';
import {
  about,
  contact,
  education,
  jobs,
  projects,
  skills,
} from '../../content/cv';
import styles from './cv.module.scss';

const CV: FC = () => (
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
