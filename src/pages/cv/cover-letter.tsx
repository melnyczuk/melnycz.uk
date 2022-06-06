import React, { FC } from 'react';
import classnames from 'classnames';

import { Markdown } from '../../components';
import content from '../../content/cv/cover-letter.md';

import styles from './cv.module.scss';

const CV: FC = () => (
  <main className={styles['cv']}>
    <Markdown className={classnames(styles['cv__cover'])} content={content} />
  </main>
);

export default CV;
