import React from 'react';

export default function Modal(props = {}) {
  const {
    visible = false,
    classes = [],
    children = []
  } = props;

  if (visible) {
    return (
      <div className={[ 'modal', ...classes ].join(' ')} >
        {children}
      </div>
    );
  }
}
