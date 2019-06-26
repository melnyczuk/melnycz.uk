import React from 'react';
import './Button.scss';

interface ButtonProps {
  parent: string;
  purpose: string;
  onClick: () => void;
}

const getClassForParent =
  parent =>
    purpose =>
      elm =>
        `button ${parent}--button button--${purpose}${elm === 'img' && '--img'}`;

const Button: React.FunctionComponent<ButtonProps> =
  ({ parent, purpose, onClick }) => {
    const getClassForElm = getClassForParent(parent)(purpose);
    return (
      <button
        type='button'
        onClick={onClick}
        className={getClassForElm('main')}
      >
        <img
          alt={purpose}
          src={`./svg/${purpose}.svg`}
          className={getClassForElm('img')}
        />
      </button>
    );
  };

export { Button, ButtonProps };
