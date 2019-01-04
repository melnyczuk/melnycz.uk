import React, { PureComponent } from 'react';
import makeClassesClassName from '../utils';

const DEFAULT_MODAL_CLASS = 'modal';

class Modal extends PureComponent {
  constructor(props) {
    super();
    const {
      classes = [],
      visible = false
    } = props;

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      visible: visible
    };

    this.className = makeClassesClassName(classes, DEFAULT_MODAL_CLASS);
  }

  handleShow(){ this.setState({ visible: true }); }
  handleHide(){ this.setState({ visible: false }); }

  render() {
    if (this.state.visible) {
      return (
        <div className={this.className} >
        </div>
      );
    }
  }
}

export default Modal;
