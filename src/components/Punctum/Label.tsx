import React, { FC } from 'react';

interface LabelProps {
  title: string;
}

const Label: FC<LabelProps> = ({ title }) => (
  <div className="punctum__label">
    <h2 className="punctum__title">{title}</h2>
  </div>
);

export default Label;
