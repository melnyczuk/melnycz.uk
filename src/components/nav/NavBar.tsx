import React from 'react';
import NavButton from './NavButtons';

interface NavBarProps {
  title: string;
  buttons: Array<string>
}

const NavBar = (
  {
    title,
    buttons,
  }: NavBarProps,
) => {
  return (
    <nav id='nav' className='nav'>
      {title && <h1 className='nav-title'>{title}</h1>}
      {
        buttons && buttons.map((label, i) => <NavButton key={i} label={label} />)
      }
    </nav>
  );
}

export {
  NavBar,
  NavBarProps,
}
