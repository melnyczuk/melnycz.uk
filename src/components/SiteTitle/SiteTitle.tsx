import React, { FC } from 'react';
import Link from 'next/link';

import './SiteTitle.scss';

export interface SiteTitleProps {
  title: string;
}

const SiteTitle: FC<SiteTitleProps> = ({ title }) => (
  <Link href="/">
    <button type="button" className="site-title site-title--button">
      <h1 className="site-title site-title--heading">{title}</h1>
    </button>
  </Link>
);

export default SiteTitle;
