import React from 'react';
import { Link } from 'react-router-dom';

import './SiteTitle.scss';

interface SiteTitleVals { title: string }
interface SiteTitleFuncs { handleClick }
interface SiteTitleProps extends SiteTitleVals, SiteTitleFuncs {}

const SiteTitle: React.FunctionComponent<SiteTitleProps> =
  ({ title, handleClick }) =>
    (
      <Link to='/'>
        <h1 onClick={handleClick} className='site-title'>
          {title}
        </h1>
      </Link>
    );

export { SiteTitle, SiteTitleProps, SiteTitleVals, SiteTitleFuncs };
