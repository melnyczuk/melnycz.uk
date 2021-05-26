import React, { FC } from 'react';
import { Link, PageProps } from 'gatsby';
import './pages.scss';

const NotFoundPage: FC<PageProps> = ({ path }) => (
  <main className="page-404">
    <title>Not found</title>
    <p>
      <p>{path}</p>
      <Link to="/">¯\_(ツ)_/¯</Link>
    </p>
  </main>
);

export default NotFoundPage;
