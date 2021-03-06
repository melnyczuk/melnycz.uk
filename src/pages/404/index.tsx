import React, { FC } from 'react';
import Link from 'next/link';

import styles from './404.module.scss';

const _404: FC = () => (
  <main className={styles['page-404']}>
    <title>Not found</title>
    <Link href="/">¯\_(ツ)_/¯</Link>
    <p className={styles['page-404']}>404</p>
  </main>
);

export default _404;
