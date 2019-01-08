import React, { Component } from 'react';

export default class Modal extends Component {
  constructor({ visible = false, classes = [], children = []}) {
    super();

    this.className = [...classes].join(' ');
    this.children = children;

    this.setState(() => ({ visible }));
  }

  render() {
    if (this.state.visible) {
      return (
        <div className={this.className} >
          {this.children}
        </div>
      );
    }
  }
}
