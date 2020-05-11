import React, { FC } from 'react';

import Header from '../Header';

import './App.scss';

export interface AppProps {
  page: string;
  children: JSX.Element | JSX.Element[];
}

const App: FC<AppProps> = ({ page, children }) => (
  <div className="app">
    <Header page={page} />
    <main>{children}</main>
    <footer />
  </div>
);

export default App;
