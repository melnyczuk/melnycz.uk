import React from 'react';
import Link from 'next/link';

import '../styles/SiteTitle.scss';

export interface Props { title: string }

export default ({ title }: Props) =>
  (
    <Link href='/'>
      <h1 className='site-title site-title--title'>
        {title}
      </h1>
    </Link>
  );
