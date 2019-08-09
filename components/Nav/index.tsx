import React from 'react';
import Link from 'next/link';

import './Nav.scss';

export interface Props {
  active: string;
  labels: string[];
}

const getClassName = (active: boolean): string =>
  active
    ? 'nav--button--label nav--button--label__active'
    : 'nav--button--label';

const capitaliseLabel = (label: string): string =>
  label.replace(/[a-z]/, t => t.toUpperCase());

export default ({ labels, active }) =>
  (
    <nav className='nav'>
      {
        labels && labels.map(label =>
          (
            <Link key={label} href={`/${label}`}>
              <button className='nav--button'>
                <h4 className={getClassName(active === label)}>
                  {capitaliseLabel(label)}
                </h4>
              </button>
            </Link>
          )
        )
      }
    </nav>
  );

export { getClassName, capitaliseLabel }
