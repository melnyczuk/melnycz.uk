import React from 'react';
import './Modal.scss';
import { Button } from '../Button';

export interface ModalType {
  props: ModalProps;
}

interface ModalVals {
  visible: boolean;
  children?: any,
}

interface ModalFuncs {
  hide: () => void;
}

interface ModalProps extends ModalVals, ModalFuncs {
  namespace: string;
}

const Modal: React.FunctionComponent<ModalProps> =
  ({ visible, hide, children }) =>
    visible
    ? (
      <div className='modal'>
        <div className='modal--header'>
          <Button parent='modal' purpose='close' onClick={hide}
            className='modal--header--button'/>
        </div>
        <div className='modal--body'>{children && children}</div>
      </div>
    ) : null;

export { Modal, ModalProps, ModalVals, ModalFuncs };
