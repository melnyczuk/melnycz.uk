import React from 'react';
import NavButtons from './NavButtons';
import { NavButtonLabel } from '../../store/store.d';

interface NavBarProps {
  title: string;
  buttons: Array<NavButtonLabel>
}

const NavBar = (
  {
    title,
    buttons
  }: NavBarProps,
) => {
  return (
    <nav id='nav' className='nav'>
      {title && <h1 className='nav-title'>{title}</h1>}
      <NavButtons buttons={buttons} />
    </nav>
  );
}

export default NavBar
