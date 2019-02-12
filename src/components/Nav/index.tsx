import * as React from 'react';
import NavButton from './NavButtons';
import { NavType, NavLinksType } from '../../store/types';

export interface NavBarProps {
  links: NavLinksType;
}

const NavBar = (
  {
    links,
  }: NavBarProps,
) => (
    <nav className='nav'>
      {
        links && links.map(
          (label: string, i: number) =>
            <NavButton key={i} label={label} />
        )
      }
    </nav>
  );


export {
  NavBar
}
