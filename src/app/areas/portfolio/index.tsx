import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  ModalContainer,
  PostContainer,
  PunctumContainer,
  SubNavContainer,
} from './portfolio.containers';

import {
  setTitle,
} from '../../../store/about/about.actions';

import {
  worksSelectors,
} from '../../../store/works/works.selectors';

import {
  StoreType,
  WorksType,
} from '../../../store/types';

function filterWorks(works: WorksType, filter: string): string[] {
  return Object.keys(works).filter(
    (key: string) => (works[key].type.includes(filter))
  );
}

function generateWorks(works: WorksType, keys: string[]): JSX.Element[] {
  console.log(keys);
  return keys.map(
    (key, i) => {
      const { namespace } = works[key];
      return works.hasOwnProperty(key) && <Work key={i} namespace={namespace} />
    }
  )
};

interface WorkProps {
  namespace: string;
}

class Work extends React.PureComponent<WorkProps> {

  constructor(props: WorkProps) {
    super(props);
  }

  render() {
    const { namespace } = this.props;

    return (
      <section>
        <PunctumContainer namespace={namespace} />
        <ModalContainer namespace={namespace}>
          <PostContainer namespace={namespace} />
        </ModalContainer>
      </section>
    )
  }
}

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
    const { works, filter } = this.props;

    return (
      <div className="portfolio">
        <SubNavContainer />
        <Route exact path='/portfolio' render={
          () => generateWorks(works, Object.keys(works))
        } />
        <Route path='/portfolio/:filter' render={
          () => generateWorks(works, filterWorks(works, filter))
        }
        />
      </div>
    );
  }
}

export default connect<PortfolioVals, PortfolioFuncs, {}>
  (
    (state: StoreType) => ({
      works: worksSelectors.selectWorks(state),
      filter: worksSelectors.selectWorksFilter(state),
    }),
    (dispatch: Function) => ({
      updateTitle: (title: string) => dispatch(setTitle(title))
    })
  )(Portfolio);
