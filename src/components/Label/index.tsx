import React from 'react';

interface LabelProps {
  title: string;
  parent: string;
}

const Label: React.FunctionComponent<LabelProps> =
  ({title, parent}) =>
    (
      <div className={`${parent}--label`}>
        <h2 className={`${parent}--title`}>
          {title}
        </h2>
      </div>
    );

export default Label;
