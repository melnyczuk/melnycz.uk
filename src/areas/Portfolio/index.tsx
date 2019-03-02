import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  SubNavContainer,
  WorksContainer,
} from './Portfolio.containers';

import {
  setTitle,
} from '../../store/about/about.actions';

import {
  worksSelectors,
} from '../../store/works/works.selectors';

import {
  StoreType,
  WorksType,
} from '../../types';


interface PortfolioVals {
  works: WorksType;
  filter?: string;
}

interface PortfolioFuncs {
  updateTitle: (title: string) => void;
}

interface PortfolioProps extends PortfolioVals, PortfolioFuncs { }


export class Portfolio extends React.PureComponent<PortfolioProps> {

  constructor(props: PortfolioProps) {
    super(props);
  }

  componentDidMount() {
    const { updateTitle } = this.props;
    updateTitle('Portfolio');
  }

  render() {
    return (
      <div className="portfolio">
        <SubNavContainer />
        <Route exact path='/portfolio' component={WorksContainer} />
        <Route path='/portfolio/:filter' component={WorksContainer} />
      </div>
    );
  }
}

export default connect<PortfolioVals, PortfolioFuncs, {}>
  (
    (state: StoreType) => ({
      works: worksSelectors.selectWorks(state),
    }),
    (dispatch: Function) => ({
      updateTitle: (title: string) => dispatch(setTitle(title))
    })
  )(Portfolio);
