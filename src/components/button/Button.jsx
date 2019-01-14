import React from 'react';

export default function Button({ classes = [], children = [] }){
  const className = [...classes].join(' ') || null;
  return(
    <div className={className}>
      {children}
    </div>
  )
}