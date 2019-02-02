import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Button from '../button/Button';
import { joinClasses } from '../../utils';

export const Modal = (
  {
    visible = false,
    classes,
    children = [],
  }
) => {
  if (visible) {
    return (
      <div className={joinClasses(classes)} >
        <Button visible={true} type={'close'} />
        {children}
      </div>
    );
  }
  return null;
}
