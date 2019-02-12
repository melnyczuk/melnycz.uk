import * as React from 'react';

import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  label: string;
}

const NavButton = (
  {
    label,
  }: NavButtonProps
): JSX.Element => {
  const id = String(label).toLowerCase().replace(' ', '-');
  return (
    <button className={'nav-button'} id={id}>
      <NavLink to={`/${id}`}>
        {label}
      </NavLink>
    </button>
  );
}

export default NavButton;
