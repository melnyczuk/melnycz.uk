import * as React from 'react';
import NavButton from './NavButtons';

interface NavBarProps {
  title: string;
  links: Array<string>
}

const NavBar = (
  {
    title,
    links,
  }: NavBarProps,
) => {
  return (
    <nav className='nav'>
      {title && <h1 className='nav-title'>{title}</h1>}
      {
        links && links.map(
          (label, i) => <NavButton key={i} label={label} />
        )
      }
    </nav>
  );
}

export {
  NavBar,
  NavBarProps,
}
