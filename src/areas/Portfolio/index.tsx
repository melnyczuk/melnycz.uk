import * as React from 'react';
import { connect } from 'react-redux';

import {
  PunctumContainer,
  ModalContainer,
  PostContainer,
} from './containers';

import {
  selectPortfolio,
} from '../../store/portfolio/selectors';

import {
  PortfolioType,
  StoreType,
} from "../../types";

interface WorkProps {
  namespace: string;
}

const filterWorks = (portfolio: PortfolioType, filter: string): string[] =>
  Object.keys(portfolio).filter(
    (key: string) => (portfolio[key].type.includes(filter))
  );

const generatePortfolio = (portfolio: PortfolioType, keys: string[]): JSX.Element[] =>
  keys.map(
    (key, i) => {
      const { namespace } = portfolio[key];
      return portfolio.hasOwnProperty(key) && <Work key={i} namespace={namespace} />
    }
  );

class Work extends React.PureComponent<WorkProps> {

  constructor(props: WorkProps) {
    super(props);
  }

  render() {
    const { namespace } = this.props;

    return (
      <section className='work' id={namespace}>
        <PunctumContainer namespace={namespace} />
        <ModalContainer namespace={namespace}>
          <PostContainer namespace={namespace} />
        </ModalContainer>
      </section>
    )
  }
}

interface PortfolioVals {
  portfolio: PortfolioType;
  match?: {
    params?: {
      filter?: string;
    }
  }
}

interface PortfolioFuncs { }

interface PortfolioProps extends PortfolioVals, PortfolioFuncs {
  filter?: string;
}

class Portfolio extends React.PureComponent<PortfolioProps> {

  constructor(props: any) {
    super(props);
  }

  render() {
    const { portfolio, filter } = this.props;

    const filterKeys: string[] = filter
      ? filterWorks(portfolio, filter)
      : Object.keys(portfolio);

    return generatePortfolio(portfolio, filterKeys);
  }

}

export default connect<PortfolioVals, PortfolioFuncs, {}>
  (
    (state: StoreType, props: PortfolioProps) => ({
      portfolio: selectPortfolio(state),
      filter: props.match.params.filter,
    }),
    (dispatch: Function, props: PortfolioProps) => ({}),
  )(Portfolio);
