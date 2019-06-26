import * as React from 'react';
import './Button.scss';

interface ButtonProps {
  parent: string;
  purpose: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> =
  ({ purpose, className = '', onClick }) =>
    (
      <button type="button" onClick={onClick}
          className={`button button--${purpose} ${className}`}>
        <img src={`./svg/${purpose}.svg`}
          className={`button button--${purpose}--img`}/>
      </button>
    );

export { Button, ButtonProps }
