import React, { FC } from 'react';

import './PageTitle.scss';

const PageTitle: FC = ({ children }) => (
  <h2 className="page-title">{children}</h2>
);

export default PageTitle;
