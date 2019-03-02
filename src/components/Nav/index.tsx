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
              <NavLink
                key={i}
                className={`NavButton ${buttonClassName}`}
                to={`${prefix}/${label.toLowerCase().replace(' ', '-')}`}
              >
                <h4 className='label'>
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
