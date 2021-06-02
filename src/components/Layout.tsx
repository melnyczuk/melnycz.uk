import 'modern-css-reset';
import React, { FC } from 'react';
import { Navigation, SEO } from '.';

const Layout: FC<{ path: string }> = ({ children, path }) => (
  <>
    <SEO />
    <Navigation path={path} />
    {children}
  </>
);

export default Layout;
