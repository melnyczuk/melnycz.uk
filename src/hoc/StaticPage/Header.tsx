import React, { FC, ComponentProps } from 'react';
import Head from 'next/head';

import { meta, navlabels, sitetitle } from '../../../static/info.json';

import Nav from '../../components/Nav';
import SiteTitle from '../../components/SiteTitle';

interface HeaderProps {
  active: ComponentProps<typeof Nav>['active'];
}

const Header: FC<HeaderProps> = ({ active }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Head>
    <header>
      <SiteTitle title={sitetitle} />
      <Nav active={active} labels={navlabels} />
    </header>
  </>
);

export default Header;
