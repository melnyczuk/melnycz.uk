import React from 'react';

export default function Viewer({classes = [], children = []}) {
  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );

}
