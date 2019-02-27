import * as React from 'react';
import { connect } from 'react-redux';

import { Work, WorkProps } from './Work';
import { SubNavContainer } from './portfolio.containers';

import { selectWorks } from '../../../store/works/works.selectors';

import {
  PortfolioType,
  StoreType,
  WorksType,
} from '../../../store/types';
import { setTitle } from '../../../store/about/about.actions';

interface PortfolioVals {
  works: WorksType;
}

interface PortfolioFuncs {
  updateTitle: (title: string) => void;
}

interface PortfolioProps extends PortfolioVals, PortfolioFuncs {}

export class Portfolio extends React.PureComponent<PortfolioProps> {

  constructor(props: PortfolioProps) {
    super(props);
  }

  render() {

    const { works, updateTitle } = this.props;

    updateTitle('Portfolio');

    return (
      <div className="portfolio">
        <SubNavContainer />
        <div className="works">
          {
            Object.keys(works).map(
              (key, i) => {
                const { namespace }: WorkProps = works[key];
                return (
                  works.hasOwnProperty(key) &&
                  <Work key={i} namespace={namespace} />
                );
              },
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreType) => ({
  works: selectWorks(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateTitle: (title: string) => dispatch(setTitle(title))
})

export default connect<PortfolioVals, PortfolioFuncs, {}>
  (mapStateToProps, mapDispatchToProps)(Portfolio);
