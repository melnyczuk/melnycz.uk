import React, { FC, ComponentProps } from 'react';
import Head from 'next/head';

import Nav from '../Nav';
import SiteTitle from '../SiteTitle';

import { meta, navlabels, sitetitle } from '../../../static/db/info.json';

import './Header.scss';

interface HeaderProps {
  page: ComponentProps<typeof Nav>['active'];
}

const Header: FC<HeaderProps> = ({ page }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <header>
      <SiteTitle title={sitetitle} />
      <Nav active={page} labels={navlabels} />
    </header>
  </>
);

export default Header;
