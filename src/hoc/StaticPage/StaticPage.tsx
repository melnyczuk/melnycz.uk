import React from 'react';

import Header from '../../components/Header';

import './StaticPage.scss';

export interface AppProps {
  page: string;
  children: JSX.Element;
}

const StaticPage = (title) => (content) => (props = {}) => (
  <div className="app">
    <Header page={title} />
    <main>{content(props)}</main>
    <footer />
  </div>
);

export default StaticPage;
