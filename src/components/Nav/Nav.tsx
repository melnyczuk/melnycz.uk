import React, { FC } from 'react';
import Link from 'next/link';
import './Nav.scss';

const getClassName = (active: boolean): string =>
  active ? 'nav__label nav__label--active' : 'nav__label';

const capitaliseLabel = (label: string): string =>
  label.replace(/[a-z]/, (t) => t.toUpperCase());

interface NavProps {
  active: string;
  labels: string[];
}

const Nav: FC<NavProps> = ({ active, labels }) => (
  <nav className="nav">
    {labels?.map((label) => (
      <Link key={label} href={`/${label}`}>
        <button type="button" className="nav__button">
          <h4 className={getClassName(active === label)}>
            {capitaliseLabel(label)}
          </h4>
        </button>
      </Link>
    ))}
  </nav>
);

export default Nav;
