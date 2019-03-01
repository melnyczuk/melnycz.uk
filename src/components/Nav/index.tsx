import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavType } from '../../types';

import './Nav.scss';

interface NavBarVals extends NavType {
  className: string;
  buttonClassName: string;
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
      buttonClassName,
      labels,
      title,
    }: NavBarProps = this.props;

    const prefix = title ? `/${title}` : '';

    return (
      <nav className={`Nav ${className}`}>
        {
          labels && labels.map(
            (label: string, i: number) => (
              <button
                key={i}
                className={`NavButton ${buttonClassName}`}
              >
                <NavLink
                  to={`${prefix}/${label.toLowerCase().replace(' ', '-')}`}
                >
                  {label}
                </NavLink>
              </button>
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
