import React from 'react';

import Button from '../button/Button';

const Modal = (
  {
    visible,
    className,
    children = [],
  }
) => {
  if (!!visible) {
    return (
      <div className={className} >
        <Button visible={true} type={'close'} />
        {children && children}
      </div>
    );
  }
  return null;
}

export default Modal;