import React, { FC } from 'react';
import { Link, PageProps } from 'gatsby';
import classnames from 'classnames';
import './Navigation.scss';

type NavigationProps = Pick<PageProps, 'path'> & {
  showDescription?: boolean;
};

const Navigation: FC<NavigationProps> = ({ showDescription = false, path }) => (
  <div className="navigation">
    {showDescription && (
      <p className="navigation__paragraph">
        <span className="navigation__paragraph--me">How Melnyczuk</span> is an
        artist who uses uses code, video, images and text to investigate
        technology, power and community.
      </p>
    )}
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
