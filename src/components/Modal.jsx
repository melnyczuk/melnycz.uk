import React, { PureComponent } from 'react';
import makeClassesClassName from '../utils';

const DEFAULT_MODAL_CLASS = 'modal';

class Modal extends PureComponent {
  render() {
    const { classes = [] } = this.props;
    const className = makeClassesClassName(classes, DEFAULT_MODAL_CLASS);
    return (<div className={className}></div>);
  }
}

export default Modal;
