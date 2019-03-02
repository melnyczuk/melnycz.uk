import * as React from 'react';
import { Link } from 'react-router-dom';

import './SiteTitle.scss';

interface SiteTitleVals {
  className: string;
  title: string;
}

interface SiteTitleFuncs {
  updateTitle: () => void;
}

interface SiteTitleProps extends SiteTitleVals, SiteTitleFuncs { }

const SiteTitle = ({ title, className, updateTitle }: SiteTitleProps) => (
  <Link to={'/'}>
    <h1 className={`SiteTitle ${className}`} onClick={() => updateTitle()}>
      {title}
    </h1>
  </Link>
)

export {
  SiteTitle,
  SiteTitleProps,
  SiteTitleVals,
  SiteTitleFuncs,
}
