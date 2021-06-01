import React, { FC } from 'react';
import { Link, PageProps } from 'gatsby';
import './404.scss';

const NotFoundPage: FC<PageProps> = () => (
  <main className="page-404">
    <title>Not found</title>
    <Link to="/">¯\_(ツ)_/¯</Link>
  </main>
);

export default NotFoundPage;
