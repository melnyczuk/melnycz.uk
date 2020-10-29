import React, { ComponentProps } from 'react';
import Header from './Header';
import './StaticPage.scss';

type Active = ComponentProps<typeof Header>['active'];

const StaticPage = (active: Active) => (content) => (props = {}) => (
  <div className="app">
    <Header active={active} />
    <main>{content(props)}</main>
    <footer />
  </div>
);

export default StaticPage;
