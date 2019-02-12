import * as React from 'react';
import { connect } from 'react-redux';

import { NavBar } from '../../../components/Nav';
import { Work, WorkProps } from './Work';

import { selectWorks } from '../../../store/works/works.selectors';

import {
  selectLinksForActive
} from '../../../store/nav/nav.selectors';

import {
  PortfolioType,
  StoreType,
  WorksType,
  NavLinksType,
} from '../../../store/types';


interface PortfolioProps {
  links: NavLinksType;
  works: WorksType;
}

const Portfolio = ({ links, works }: PortfolioProps): JSX.Element => (
  <div className="portfolio">
    <NavBar links={links} />
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
)

const mapStateToProps = (state: StoreType) => ({
  links: selectLinksForActive(state),
  works: selectWorks(state),
});

export default connect
  <PortfolioProps, PortfolioType, any>
  (mapStateToProps)
  (Portfolio);
