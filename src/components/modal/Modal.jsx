import React from 'react';

export default function Modal ({ visible, classes = [], children = []}) {
  if (visible) {
    const className = [...classes].join(' ') || null;
    return (
      <div className={className} >
        {children}
      </div>
    );
  }
  return null;
}
