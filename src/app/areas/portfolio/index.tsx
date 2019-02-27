import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  ModalContainer,
  PostContainer,
  PunctumContainer,
  SubNavContainer
} from './portfolio.containers';

import {
  setTitle
} from '../../../store/about/about.actions';

import {
  selectWorks
} from '../../../store/works/works.selectors';

import {
  StoreType,
  WorksType,
} from '../../../store/types';


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
    );
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

  render() {

    const { works, filter, updateTitle } = this.props;

    updateTitle('Portfolio');

    return (
      <div className="portfolio">
        <SubNavContainer />
        <Route path={`/portfolio/${filter}`}>
          <div className="works">
            {
              Object.keys(works).map(
                (key, i) => {

                  const { namespace }: WorkProps = works[key];

                  const typeHasFilter = filter
                    ? works[key].type.includes(filter)
                    : true;

                  return (
                    works.hasOwnProperty(key) &&
                    typeHasFilter &&
                    <Work key={i} namespace={namespace} />
                  );
                },
              )
            }
          </div>
        </Route>
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
