import React from 'react';
import Button from '../button/Button';

export default function Modal ({ visible, classes = [], children = []}) {
  if (visible) {
    const className = [...classes].join(' ') || null;
    return (
      <div className={className} >
      <Button type={'close'} />
        {children}
      </div>
    );
  }
  return null;
}
