import React, { ComponentProps } from 'react';
import Head from 'next/head';

import Nav from '../../components/Nav';
import SiteTitle from '../../components/SiteTitle';

import { meta, navlabels, sitetitle } from '../../../static/db/info.json';

import './StaticPage.scss';

type Active = ComponentProps<typeof Nav>['active'];

const StaticPage = (active: Active) => (content) => (props = {}) => (
  <div className="app">
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <header>
      <SiteTitle title={sitetitle} />
      <Nav active={active} labels={navlabels} />
    </header>
    <main>{content(props)}</main>
    <footer />
  </div>
);

export default StaticPage;
