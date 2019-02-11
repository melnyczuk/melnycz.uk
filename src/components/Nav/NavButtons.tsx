import React from 'react';

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
      <a href={`/${id}`}>
        {label}
      </a>
    </button>
  );
}

export default NavButton;
