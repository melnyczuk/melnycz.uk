import React, { FC } from 'react';
import { Link, PageProps } from 'gatsby';
import './page-styles/404.scss';
import { Layout } from '../components';

const NotFoundPage: FC<PageProps> = ({ path }) => (
  <Layout path={path}>
    <main className="page-404">
      <title>Not found</title>
      <Link to="/">¯\_(ツ)_/¯</Link>
    </main>
  </Layout>
);

export default NotFoundPage;
