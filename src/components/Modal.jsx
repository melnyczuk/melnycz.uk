import React from 'react';

export default function Modal({ visible = false, classes, children = []}) {
  if (visible) {
    return (
      <div className={[...classes].join(' ')} >
        {children}
      </div>
    );
  }
}
