import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { metadata } from '../../content';
import styles from './Navigation.module.scss';

type NavLink = {
  href: string;
  regex: RegExp;
  label: string;
};

const links: NavLink[] = [
  { href: '/about', regex: /\/about\/?/, label: 'About' },
  { href: '/feed', regex: /\/feed\/?/, label: 'Feed' },
  { href: '/projects', regex: /\/projects\/?/, label: 'Projects' },
  { href: '/writing', regex: /\/writing\/?/, label: 'Writing' },
];

type NavigationProps = {
  className?: string;
};

const Navigation: FC<NavigationProps> = ({ className }) => {
  const router = useRouter();

  return (
    <nav className={classnames(styles['navigation'], className)}>
      <h1 className={styles['navigation__paragraph']}>
        <span className={styles['navigation__paragraph--me']}>
          {metadata.website.title}
        </span>
        {metadata.website.body.replace('How Melnyczuk', '')}
      </h1>
      <span className={styles['navigation__links-container']}>
        {links.map(({ href, regex, label }) => (
          <Link
            key={href}
            href={href}
            className={classnames(styles['navigation__link'], {
              [styles['navigation__link--active']]: regex.test(router.pathname),
            })}
          >
            {label}
          </Link>
        ))}
      </span>
    </nav>
  );
};

export default Navigation;
