import React from 'react';

import Button from '../button/Button';

export interface ModalType {
  props: ModalProps;
}

export interface ModalProps {
  namespace: string;
  visible: boolean;
  hide: () => void;
  className?: string;
  children?: Array<JSX.Element>,
}

const Modal = (
  {
    visible,
    className,
    hide,
    children = [],
  }: ModalProps,
): JSX.Element => {
  if (visible) {
    return (
      <div className={className}>
        <Button purpose="hide" onClick={hide} />
        {children && children}
      </div>
    );
  }
  return null;
};

export default Modal;