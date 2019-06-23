import React from 'react';

interface LabelProps {
  title: string;
  type: string;
}

export default ({title, type}: LabelProps) => (
  <div className={`${type}-label`}>
    <h2 className={`${type}-title`}>
      {title}
    </h2>
  </div>
)
