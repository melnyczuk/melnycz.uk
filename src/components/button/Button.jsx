import React from 'react';
// import { connect } from 'react-redux';

export const Button = (
  {
    visible,
    className,
    onClick,
  }
) => {
  if (visible) {
    return (
      <button
        className={className}
        onClick={onClick}
      >
        <svg></svg>
      </button>
    )
  }
  return null;
}

// const mapStateToProps = (state, props) => {
//   const { classes = [] } = props;
//   return {
//     className: [...classes].join(' ') || null,
//     visible: props.visible
//   };
// };

// const mapDispatchToProps = (dispatch, props) => {
//   const { type } = props;
//   return {
//     onClick: () => dispatch(handleButtonClick(type)),
//   }
// }

export default Button
//connect(mapStateToProps, mapDispatchToProps)(Button);