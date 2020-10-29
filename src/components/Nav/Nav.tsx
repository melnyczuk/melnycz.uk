import React, { FC } from 'react';
import './Nav.scss';

const getClassName = (active: boolean): string =>
  active ? 'nav__label nav__label--active' : 'nav__label';

const capitaliseLabel = (label: string): string =>
  label.replace(/[a-z]/, (t) => t.toUpperCase());

interface NavProps {
  active: string;
  labels: Record<string, string>;
}

const Nav: FC<NavProps> = ({ active, labels }) => (
  <nav className="nav">
    {Object.keys(labels)?.map((label) => (
      <a type="button" className="nav__button" key={label} href={labels[label]}>
        <h4 className={getClassName(active === label)}>
          {capitaliseLabel(label)}
        </h4>
      </a>
    ))}
  </nav>
);

export default Nav;
