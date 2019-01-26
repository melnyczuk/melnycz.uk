import React from 'react';
import Button from '../button/Button';

const Modal = (
  {
    visible,
    classes = [],
    children = []
  }
) => {
  if (visible) {
    const className = [...classes].join(' ') || null;
    return (
      <div className={className} >
        <Button visible={true} type={'close'} />
        {children}
      </div>
    );
  }
  return null;
}

export default Modal;
