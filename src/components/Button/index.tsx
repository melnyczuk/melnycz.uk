import * as React from 'react';

import './Button.scss';

interface ButtonProps {
  purpose: string;
  onClick: () => void;
  className?: string;
}

const Button = (
  {
    purpose,
    className = '',
    onClick,
  }: ButtonProps,
): JSX.Element | null => (
    <button
      type="button"
      className={`button button-${purpose} ${className}`}
      onClick={onClick}
    >
      <img
        className={`button button-${purpose}-img`}
        src={`./svg/${purpose}.svg`}
      />
    </button>
  );

export {
  Button,
  ButtonProps,
}
