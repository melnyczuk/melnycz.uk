import * as React from 'react';

import './Button.scss';

interface ButtonProps {
  purpose: string;
  onClick: () => void;
  className?: string;
}


function switchButton(purpose: string) {

  const dirPath = `${__dirname}src/components/Button`

  switch (purpose) {
    case ('close'): return `${dirPath}/close.svg`;

    default: return (null);
  }
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
        src={switchButton(purpose)}
      />
    </button>
  );

export {
  Button,
  ButtonProps,
}
