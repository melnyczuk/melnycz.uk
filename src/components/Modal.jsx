import React from 'react';
import makeClassesClassName from '../utils';

export const DEFAULT_MODAL_CLASS = 'modal';

export default function Modal(props) {
  const {
    classes = [],
    visible = false,
    children = []
  } = props;
  console.log('modal', visible);
  const className = makeClassesClassName(classes, DEFAULT_MODAL_CLASS);

  if (visible) {
    return (
      <div className={className} >
        {children}
      </div>
    );
  }
}
