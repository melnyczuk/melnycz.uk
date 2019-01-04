import React from 'react';

export default function Post({ title, classes = [], children = [] }) {
  return (
    <div className={classes.join(' ')} >
      <h2 key="title">{title}</h2>
      {children}
    </div>
  )
}
