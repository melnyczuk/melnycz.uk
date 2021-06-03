import React, { FC } from 'react';
import Link from 'next/link';

import styles from './404.module.scss';

const NotFoundPage: FC = () => (
  <main className={styles['page-404']}>
    <title>Not found</title>
    <Link href="/">¯\_(ツ)_/¯</Link>
  </main>
);

export default NotFoundPage;
