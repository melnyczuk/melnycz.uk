import React, { FC } from 'react';
import { works } from '../../../static/db/works.json';

import PortfolioItem from './PortfolioItem';

const Portfolio: FC = () => (<>{works.map(PortfolioItem)}</>);

export default Portfolio;
