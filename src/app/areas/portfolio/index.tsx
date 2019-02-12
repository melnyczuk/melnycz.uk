import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { NavBar } from '../../../components/Nav';
import { Work, WorkProps } from './Work';

import { selectWorks } from '../../../store/works/works.selectors';

import { selectNav, selectTitle, reduceLinks } from '../../../store/nav/nav.selectors';

import {
  PortfolioType,
  StoreType,
  WorksType,
  NavLinksType,
  NavType,
} from '../../../store/types';


interface PortfolioProps {
  title: string;
  links: NavLinksType;
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

const selectPortfolio = createSelector(
  selectNav,
  (nav: NavType): NavType => (
    nav.links as Array<NavType>
  ).filter(
    (n: NavType) => n.title.toLowerCase() === 'portfolio')[0]
);

const selectPortfolioTitle = createSelector(
  selectPortfolio,
  (nav: NavType): string => selectTitle(nav)
)

const selectPortfolioLinks = createSelector(
  [selectPortfolio],
  (nav: NavType): Array<string> => reduceLinks(nav)
)

const mapStateToProps = (state: StoreType) => {
  console.log('state', state);
  console.log('folio', selectPortfolio(state));
  console.log('links', selectPortfolioLinks(state));
  console.log('title', selectPortfolioTitle(state));
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
