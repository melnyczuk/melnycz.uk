import React, { FC } from 'react';

import './Punctum.scss';

interface LabelProps {
  children: string;
}

const Label: FC<LabelProps> = ({ children }) => (
  <div className="punctum__label">
    <h2 className="punctum__title">{children}</h2>
  </div>
);

export default Label;
