import React from 'react';
import PropTypes from 'prop-types';

const Button = (
  {
    visible,
    className = null,
    onClick = null,
  },
) => {
  if (visible) {
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
      >
        <svg />
      </button>
    );
  }
  return null;
};

Button.propTypes = {
  visible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  onClick: () => {},
};

export default Button;
