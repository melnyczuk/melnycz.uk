import React from 'react';
import Button from '../button/Button';

export const Modal = (
  {
    visible = false,
    className,
    children = []
  }
) => {
  if (visible) {
    return (
      <div className={className} >
        <Button visible={true} type={'close'} />
        {children}
      </div>
    );
  }
  return null;
}
