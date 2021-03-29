import React, { FC } from 'react';
import { Link, PageProps } from 'gatsby';
import classnames from 'classnames';
import './Navigation.scss';

type NavigationProps = Pick<PageProps, 'path'>;

const Navigation: FC<NavigationProps> = ({ path }) => (
  <div className="navigation">
    <p className="navigation__paragraph">
      <span className="navigation__paragraph--me">Howard Melnyczuk</span> is an
      artist investigating technology as the site in which political structures
      are built and maintained.
    </p>
    <span className="navigation__links-container">
      <Link
        to="/projects"
        className={classnames('navigation__link', {
          'navigation__link--active': /\/projects\/?/.test(path),
        })}
      >
        Projects
      </Link>
      {/* <Link
        to="/updates"
        className={classnames('navigation__link', {
          'navigation__link--active': /\/updates\/?/.test(path),
        })}
      >
        Updates
      </Link> */}
      <Link
        to="/about"
        className={classnames('navigation__link', {
          'navigation__link--active': /\/about\/?/.test(path),
        })}
      >
        About
      </Link>
    </span>
  </div>
);

export default Navigation;
