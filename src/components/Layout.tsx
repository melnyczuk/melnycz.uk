import { useMemo } from 'react';
import SiteTitle from './SiteTitle';
import Nav from './Nav';
import { works } from '../../static/db/works.json';
import { sitetitle } from '../../static/db/info.json';

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
      <header className='header'>
        <SiteTitle title={sitetitle} />
        <Nav active={page} labels={labels} />
      </header>
      {children}
    </>
  );
}
