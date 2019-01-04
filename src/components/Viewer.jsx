import React from 'react';

export default function Viewer(props) {
  const {
    classes = [],
    children = []
  } = props;

  const className = ['viewer', ...classes].join(' ');

  return (
    <div className={className}>
      {children}
    </div>
  );

}
