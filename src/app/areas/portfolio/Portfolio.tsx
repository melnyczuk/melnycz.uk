import * as React from 'react';
import { connect } from 'react-redux';

import Work from './Work';

import {
  selectWorks,
} from '../../../store/works/works.selectors';

import {
  PortfolioType,
  StoreType,
  WorksType,
} from '../../../store/types';

export interface PortfolioProps {
  works: WorksType;
}

export const Portfolio = ({ works }: PortfolioProps) => (
  <main className="main portfolio">
    {
      Object.keys(works).map(
        (key, i) => {
          const { namespace } = works[key];
          return (
            works.hasOwnProperty(key) &&
            <Work key={i} namespace={namespace} />
          );
        },
      )
    }
  </main>
);

const mapStateToProps = (state: StoreType) => {
  return {
    works: selectWorks(state),
  };
};

export default connect
  <PortfolioProps, PortfolioType, any>
  (mapStateToProps)
  (Portfolio);
