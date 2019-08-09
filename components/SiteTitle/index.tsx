import React from 'react';
import Link from 'next/link';

import './SiteTitle.scss';

interface SiteTitleVals { title: string }
interface SiteTitleFuncs { }
interface SiteTitleProps extends SiteTitleVals, SiteTitleFuncs { }

export default ({ title }: SiteTitleProps) =>
  (
    <Link href='/'>
      <h1 className='site-title'>
        {title}
      </h1>
    </Link>
  );

