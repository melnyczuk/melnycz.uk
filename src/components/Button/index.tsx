import * as React from 'react';

interface ButtonProps {
  purpose: string;
  onClick: () => void;
  className?: string;
}

const Button = (
  {
    purpose,
    className,
    onClick,
  }: ButtonProps,
): JSX.Element | null => (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <svg />
    </button>
  );

export {
  Button,
  ButtonProps,
}
