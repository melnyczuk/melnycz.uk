import * as React from 'react';
import NavButton from './NavButtons';
import { NavType } from '../../store/types';

const NavBar = (
  {
    title,
    links,
  }: NavType,
) => (
    <nav className='nav'>
      {title && <h1 className='nav-title'>{title}</h1>}
      {
        links && links.map(
          (label: string, i: number) => <NavButton key={i} label={label} />
        )
      }
    </nav>
  );


export {
  NavBar
}
