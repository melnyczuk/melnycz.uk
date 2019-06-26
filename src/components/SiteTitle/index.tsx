import * as React from 'react';
import { Link } from 'react-router-dom';

import './SiteTitle.scss';

interface SiteTitleVals { title: string; }
interface SiteTitleFuncs {}
interface SiteTitleProps extends SiteTitleVals, SiteTitleFuncs {}

const SiteTitle: React.FunctionComponent<SiteTitleProps> =
  ({ title }: SiteTitleProps) =>
    (
      <Link to={'/'}>
        <h1 className='site-title' >
          {title}
        </h1>
      </Link>
    )

export { SiteTitle, SiteTitleProps, SiteTitleVals, SiteTitleFuncs }
