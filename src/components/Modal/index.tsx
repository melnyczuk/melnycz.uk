import * as React from 'react';

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
  children?: JSX.Element[],
}

interface ModalFuncs {
  hide: () => void;
  setLong?: (data: string) => void;
}

interface ModalProps extends ModalVals, ModalFuncs {
  namespace: string;
}

class Modal extends React.PureComponent<ModalProps> {

  constructor(props: ModalProps) {
    super(props);
  }

  render() {

    const {
      visible,
      className,
      hide,
      title,
      children,
    }: ModalProps = this.props;

    if (visible) {
      return (
        <div className={`modal ${className}`}>
          <div className='modal-header'>
            {title &&
              <h2
                className='modal-header-title'
                key='title'
              >
                {title}
              </h2>
            }
            <Button
              className='modal-header-button'
              purpose='close'
              onClick={hide}
            />
          </div>
          <div className='modal-body'>
            {children && children}
          </div>
        </div>
      );
    }

    return null;
  }
};

export {
  Modal,
  ModalProps,
  ModalVals,
  ModalFuncs,
};
