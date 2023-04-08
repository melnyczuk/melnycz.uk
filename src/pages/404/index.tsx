import Link from 'next/link';
import { FC } from 'react';

import styles from './404.module.scss';

const _404Page: FC = () => (
  <main className={styles['page-404']}>
    <title>Not found</title>
    <Link href="/">¯\_(ツ)_/¯</Link>
    <p className={styles['page-404']}>404</p>
  </main>
);

export default _404Page;
