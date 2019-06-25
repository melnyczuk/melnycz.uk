import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavType } from '../../types';

import './Nav.scss';

interface NavBarVals {
  active: string;
  title: string;
  items: NavType[];
  className: string;
}

interface NavBarFuncs { }

interface NavBarProps extends NavBarVals, NavBarFuncs { }

const NavBar: React.FunctionComponent<NavBarProps> =
  ({ className, items, title, active }) =>
    (
      <nav className={`nav ${className}`}>
        {
          items && items.map(({ label, path }, i: number) =>
            (
              <NavLink key={i} className={'nav-button'} to={`${title ? `/${title}` : ''}${path}`}>
                <h4 className={`nav-button-label ${active === label ? 'nav-button-label_active' : ''}`}>
                  {label}
                </h4>
              </NavLink>
            )
          )
        }
      </nav>
    );

export {
  NavBar,
  NavBarProps,
  NavBarVals,
  NavBarFuncs,
}
