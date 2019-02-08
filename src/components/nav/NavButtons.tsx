import React from 'react';
import { NavButtonLabel } from '../../store/store';

interface NavButtonProps {
  buttons: Array<NavButtonLabel>;
}

const NavButtons = (
  {
    buttons = []
  }: NavButtonProps
): Array<JSX.Element> => {
  return buttons.map((title, i) => {
    const label = String(title).toLowerCase().replace(' ', '-')
    return (
      <button
        key={i}
        className={'nav-button'}
        id={label}
      >
        <a href={`/${label}`}>
          {title}
        </a>
      </button>
    );
  });
}

export default NavButtons;
