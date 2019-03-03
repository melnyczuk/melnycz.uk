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

class NavBar extends React.PureComponent<NavBarProps> {

  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    const {
      className,
      items,
      title,
      active,
    }: NavBarProps = this.props;

    const prefix = title ? `/${title}` : '';

    return (
      <nav className={`nav ${className}`}>
        {
          items && items.map(
            ({ label, path }, i: number) => (
              <NavLink
                key={i}
                className={'nav-button'}
                to={`${prefix}${path}`}
              >
                <h4 className={`nav-button-label ${
                  active === label ? 'nav-button-label_active' : ''}`}>
                  {label}
                </h4>
              </NavLink>
            )
          )
        }
      </nav>
    );
  };

}

export {
  NavBar,
  NavBarProps,
  NavBarVals,
  NavBarFuncs,
}
