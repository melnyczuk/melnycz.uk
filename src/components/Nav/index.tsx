import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

interface NavBarVals {
  active: string;
  labels: string[];
}

interface NavBarFuncs { }

interface NavBarProps extends NavBarVals, NavBarFuncs { }

const getClass = (active) => active
  ? 'nav-button-label nav-button-label_active'
  : 'nav-button-label';

const NavBar: React.FunctionComponent<NavBarProps> =
  ({labels, active }) =>
    (
      <nav className='nav'>
        {
          labels && labels.map((label, i: number) =>
            (
              <NavLink key={i} className={'nav--button'} to={`/${label}`}>
                <h4 className={getClass(active === label)}>
                  {label.replace(/[a-z]/, (t) => t.toUpperCase())}
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
