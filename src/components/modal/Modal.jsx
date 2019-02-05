import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

const Modal = (
  {
    visible,
    className,
    children = [],
  },
) => {
  if (visible) {
    return (
      <div className={className}>
        <Button visible purpose="close" />
        {children && children}
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
};

Modal.defaultProps = {
  className: null,
  children: [],
};

export default Modal;
