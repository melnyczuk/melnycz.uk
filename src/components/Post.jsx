import React from 'react';

export default function Post(props) {
  const {
    title,
    classes = [],
    children = []
  } = props;

  return (
    <div className={['documentation', ...classes].join(' ')} >
      <h2 key="title">{title}</h2>
      {children}
    </div>
  )
}
