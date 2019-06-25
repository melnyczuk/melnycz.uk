import React from 'react';

interface LabelProps {
  title: string;
  type: string;
}

const Label: React.FunctionComponent<LabelProps> =
  ({title, type}) =>
    (
      <div className={`${type}-label`}>
        <h2 className={`${type}-title`}>
          {title}
        </h2>
      </div>
    );

export default Label;
