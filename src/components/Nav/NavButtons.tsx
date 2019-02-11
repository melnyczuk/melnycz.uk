import * as React from 'react';

import { Link } from 'react-router';

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
      <Link to={`/${id}`}>
        {label}
      </Link>
    </button>
  );
}

export default NavButton;
