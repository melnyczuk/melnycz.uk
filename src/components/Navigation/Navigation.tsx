import React, { FC } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import './Navigation.scss';

const HOME_PAGE = '/';

type NavigationProps = {
  path: string;
};

const Navigation: FC<NavigationProps> = ({ path }) => (
  <div className="navigation">
    <p className="navigation__paragraph">
      <span className="navigation__paragraph--me">How Melnyczuk</span> is an
      artist who uses uses code, video, photography, design, sound, writing and
      publishing to investigate technology.
    </p>
    <span className="navigation__links-container">
      <Link
        to="/projects"
        className={classnames('navigation__link', {
          'navigation__link--active':
            path === '/projects' || path === HOME_PAGE,
        })}
      >
        Projects
      </Link>
      <Link
        to="/updates"
        className={classnames('navigation__link', {
          'navigation__link--active': path === '/updates',
        })}
      >
        Updates
      </Link>
      <Link
        to="/about"
        className={classnames('navigation__link', {
          'navigation__link--active': path === '/about',
        })}
      >
        About
      </Link>
    </span>
  </div>
);

export default Navigation;
