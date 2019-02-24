import * as React from 'react';

import { Button } from '../Button';

import { fetchLongDescriptions } from '../../store/works/works.utils';

export interface ModalType {
  props: ModalProps;
}

interface ModalProps {
  namespace: string;
  visible: boolean;
  className?: string;
  long?: string;
  longPath?: string;
  children?: Array<JSX.Element>,
  hide: () => void;
  setLong?: (data: string) => void;
}

class Modal extends React.PureComponent<ModalProps> {

  constructor(props: ModalProps) {
    super(props);
  }

  // componentDidMount() {
  //   if (!this.props.long && this.props.longPath) {
  //     fetchLongDescriptions(this.props.longPath).then(data => this.props.setLong(data));
  //   }
  // }

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
};
