import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { NavBar } from '../../../components/Nav';
import { Work, WorkProps } from './Work';

import { selectWorks } from '../../../store/works/works.selectors';

import { selectPortfolio } from '../../../store/areas/areas.selectors';

import { selectTitle, selectLinks } from '../../../store/nav/nav.selectors';

import {
  NavLinks,
  PortfolioType,
  StoreType,
  WorksType,
} from '../../../store/types';


interface PortfolioProps {
  title: string;
  links: NavLinks;
  works: WorksType;
}

const Portfolio = ({ title, links, works }: PortfolioProps): JSX.Element => (
  <div className="portfolio">
  <NavBar title={title} links={links} />
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



const mapStateToProps = (state: StoreType) => {

  const selectPortfolioTitle = createSelector(
    selectPortfolio,
    folio => selectTitle(folio)
  )

  const selectPortfolioLinks = createSelector(
    selectPortfolio,
    folio => selectLinks(folio)
  )

  return {
    title: selectPortfolioTitle(state),
    links: selectPortfolioLinks(state),
    works: selectWorks(state),
  };
};

export default connect
  <PortfolioProps, PortfolioType, any>
  (mapStateToProps)
  (Portfolio);
