import classnames from 'classnames';
import Link from 'next/link';
import { Router } from 'next/router';
import { FC } from 'react';

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
  description: string;
  router: Router;
};

const Navigation: FC<NavigationProps> = ({ description, router }) => (
  <div className={styles['navigation']}>
    <h1 className={styles['navigation__paragraph']}>
      <span className={styles['navigation__paragraph--me']}>
        Howard Melnyczuk
      </span>
      {description.replace('Howard Melnyczuk', '')}
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
