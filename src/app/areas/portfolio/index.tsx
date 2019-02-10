import React from 'react';
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

interface PortfolioProps {
  works: WorksType;
}

const Portfolio = ({
  works
}: PortfolioProps
): JSX.Element => (
    <main className="main primary">
      {Object.keys(works).map(
        (key, i) => {
          const { namespace } = works[key];
          return (
            works.hasOwnProperty(key) &&
            <Work key={i} namespace={namespace} />
          );
        },
      )}
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
