import React from 'react';

interface NavButtonProps {
  key: number;
  value: string;
}

const NavButton = (
  {
    key,
    value,
  }: NavButtonProps
): JSX.Element => {
  const label = String(value).toLowerCase().replace(' ', '-');
  return (
    <button key={key} className={'nav-button'} id={label}>
      <a href={`/${label}`}>
        {value}
      </a>
    </button>
  );
}

export default NavButton;
