import React, { useMemo } from 'react';

import SiteTitle from './SiteTitle';
import Nav from './Nav';

import { works } from '../db/works.json';

export interface Props {
  page: string;
  children: Array<JSX.Element> | JSX.Element;
}

export default ({ page, children }: Props) => {
  const labels = useMemo(
    () => [...new Set(works.map(({ area }): string => area))] as string[],
    works
  );
 
  return (
    <>
      <SiteTitle title='Howard Melnyczuk' />
      <Nav active={page} labels={labels} />
      {children}
    </>
  );
}

