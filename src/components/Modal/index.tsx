import * as React from 'react';

import { Button } from '../Button';

import { fetchLongDescriptions } from '../../store/works/works.utils';

export interface ModalType {
  props: ModalProps;
}

interface ModalVals {
  className: string;
  visible: boolean;
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
      children,
    }: ModalProps = this.props;

    if (visible) {
      return (
        <div className={className}>
          <Button purpose="hide" onClick={hide} />
          {children && children}
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
