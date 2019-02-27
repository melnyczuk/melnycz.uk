import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavType } from '../../store/types';

interface NavBarVals {
  className: string;
  buttonClassName: string;
  labels: NavType['labels'];
}

interface NavBarFuncs {
  // updateTitle: (title: NavType['title']) => void;
}

interface NavBarProps extends NavBarVals, NavBarFuncs { }

class NavBar extends React.PureComponent<NavBarProps> {

  constructor(props: NavBarProps) { super(props); }

  render() {
    const { className, buttonClassName, labels }: NavBarProps = this.props;

    return (
      <nav className={className}>
        {
          labels && labels.map(
            (label: string, i: number) => (
              <button key={i} className={buttonClassName}>
                <NavLink to={`/${label.toLowerCase().replace(' ', '-')}`} >
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
