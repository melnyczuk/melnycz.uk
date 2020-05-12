import React, { FC } from 'react';

import { works } from '../../../static/db/works.json';

import App from '../../components/App';
import PortfolioItem from '../../components/PortfolioItem';

const Portfolio: FC = () => (
  <App page="portfolio">{works.map(PortfolioItem)}</App>
);

export default Portfolio;
