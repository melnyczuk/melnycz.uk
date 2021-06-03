import React, { FC } from 'react';
import Link from 'next/link';
import { Router } from 'next/router';
import classnames from 'classnames';

import { BioType } from '../../types';

import styles from './Navigation.module.scss';

type NavLink = {
  href: string;
  regex: RegExp;
  label: string;
};

const links: NavLink[] = [
  { href: '/about', regex: /\/about\/?/, label: 'About' },
  { href: '/projects', regex: /\/projects\/?/, label: 'Projects' },
];

type NavigationProps = {
  bio: BioType;
  router: Router;
};

const Navigation: FC<NavigationProps> = ({ bio, router }) => (
  <div className={styles['navigation']}>
    <h1 className={styles['navigation__paragraph']}>
      <span className={styles['navigation__paragraph--me']}>
        Howard Melnyczuk
      </span>
      {bio?.short?.replace('Howard Melnyczuk', '')}
    </h1>
    <span className={styles['navigation__links-container']}>
      {links.map(({ href, regex, label }) => (
        <Link key={href} href={href}>
          <a
            href={href}
            className={classnames(styles['navigation__link'], {
              [styles['navigation__link--active']]: regex.test(router.pathname),
            })}
          >
            {label}
          </a>
        </Link>
      ))}
    </span>
  </div>
);

export default Navigation;
