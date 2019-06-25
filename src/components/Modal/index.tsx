import React from 'react';
import './Modal.scss';
import { Button } from '../Button';

export interface ModalType {
  props: ModalProps;
}

interface ModalVals {
  className: string;
  visible: boolean;
  title?: string;
  long?: string;
  longPath?: string;
  children?: any,
}

interface ModalFuncs {
  hide: () => void;
}

interface ModalProps extends ModalVals, ModalFuncs {
  namespace: string;
}

const Modal: React.FunctionComponent<ModalProps> =
  ({ visible, className, hide, title, children }) =>
    visible
    ? (
      <div className={`modal ${className}`}>
        <div className='modal-header'>
          <Button purpose='close' onClick={hide}
            className='modal-header-button'/>
        </div>
        <div className='modal-body'>{children && children}</div>
      </div>
    ) : null;

export { Modal, ModalProps, ModalVals, ModalFuncs };
