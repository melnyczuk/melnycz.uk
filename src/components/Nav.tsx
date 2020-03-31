import React, { FC } from 'react';
import Link from 'next/link';
import '../styles/Nav.scss';

export interface Props {
  active: string;
  labels: string[];
}

const getClassName = (active: boolean): string =>
  active ? 'nav--label nav--label__active' : 'nav--label';

const capitaliseLabel = (label: string): string =>
  label.replace(/[a-z]/, (t) => t.toUpperCase());

const Nav: FC<Props> = ({ labels, active }) => (
  <nav className="nav">
    {labels &&
      labels.map((label) => {
        const labelClassName = getClassName(active === label);
        return (
          <Link key={label} href={`/${label}`}>
            <button type="button" className="nav--button">
              <h4 className={labelClassName}>{capitaliseLabel(label)}</h4>
            </button>
          </Link>
        );
      })}
  </nav>
);

export default Nav;
export { getClassName, capitaliseLabel };
