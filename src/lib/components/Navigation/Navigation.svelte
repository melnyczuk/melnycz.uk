<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  import styles from './Navigation.module.scss';

  type NavLink = {
    href: '/about' | '/feed' | '/projects' | '/writing';
    regex: RegExp;
    label: string;
  };

  const links: NavLink[] = [
    { href: '/about', regex: /\/about\/?/, label: 'About' },
    { href: '/feed', regex: /\/feed\/?/, label: 'Feed' },
    { href: '/projects', regex: /\/projects\/?/, label: 'Projects' },
    { href: '/writing', regex: /\/writing\/?/, label: 'Writing' },
  ];

  let { class: className }: { class?: ClassValue } = $props();

  const website = $derived(page.data.website);
</script>

<nav class={[styles['navigation'], className]}>
  <h1 class={styles['navigation__paragraph']}>
    <span class={styles['navigation__paragraph--me']}>
      {website.title}
    </span>
    {website.body.replace('How Melnyczuk', '')}
  </h1>
  <span class={styles['navigation__links-container']}>
    {#each links as { href, regex, label } (href)}
      <a
        href={resolve(href)}
        class={[
          styles['navigation__link'],
          {
            [styles['navigation__link--active']]: regex.test(page.url.pathname),
          },
        ]}
      >
        {label}
      </a>
    {/each}
  </span>
</nav>
