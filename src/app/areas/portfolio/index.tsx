import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  SubNavContainer,
  WorksContainer,
} from './portfolio.containers';

import {
  setTitle
} from '../../../store/about/about.actions';

import {
  selectWorks
} from '../../../store/works/works.selectors';

import {
  StoreType,
} from '../../../store/types';

interface PortfolioVals {}

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
        <Route path='/' component={WorksContainer} />
        <Route path={`/portfolio/:filter`} component={WorksContainer} />
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
