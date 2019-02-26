import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  NavLinksType, 
  NavButtonType 
} from '../../store/types';


interface NavBarVals {
  links: NavLinksType;
}

interface NavBarFuncs {

}

interface NavBarProps extends NavBarVals, NavBarFuncs {

}

class NavBar extends React.PureComponent<NavBarProps> {

  constructor(props: NavBarProps) { super(props); }

  render() {
    const { links }: NavBarProps = this.props;
    return (
      <nav className='nav'>
        {
          links && links.map(
            ({ label, updateTitle }: NavButtonType) => {
            <button className={'nav-button'} onClick={() => updateTitle(label)}>
              <NavLink to={`/${label.toLowerCase().replace(' ', '-')}`} >
                {label}
              </NavLink>
            </button>
          })
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
