import React from 'react';

export default function Button({ type, classes = [], children = [] }){
  const className = [...classes].join(' ') || null;
  return(
    <button className={className}>
      {children}
    </button>
  )
}
