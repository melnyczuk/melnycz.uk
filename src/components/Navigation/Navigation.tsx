import React, { FC } from 'react';
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import classnames from 'classnames';
import './Navigation.scss';
import { BioType } from '../../types';

type NavLink = {
  to: string;
  regex: RegExp;
  label: string;
};

const links: NavLink[] = [
  { to: '/about', regex: /\/about\/?/, label: 'About' },
  { to: '/projects', regex: /\/projects\/?/, label: 'Projects' },
];

type NavigationProps = Pick<PageProps, 'path'>;
type NavigationQuery = {
  folio: {
    bio: BioType;
  };
};

const navigationQuery = graphql`
  query NavigationQuery {
    folio {
      bio {
        short
      }
    }
  }
`;

const Navigation: FC<NavigationProps> = ({ path }) => {
  const data: NavigationQuery = useStaticQuery(navigationQuery);

  return (
    <div className="navigation">
      <p className="navigation__paragraph">
        <span className="navigation__paragraph--me">Howard Melnyczuk</span>
        {data.folio.bio.short.replace('Howard Melnyczuk', '')}
      </p>
      <span className="navigation__links-container">
        {links.map(({ to, regex, label }) => (
          <Link
            key={to}
            to={to}
            className={classnames('navigation__link', {
              'navigation__link--active': regex.test(path),
            })}
          >
            {label}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Navigation;
