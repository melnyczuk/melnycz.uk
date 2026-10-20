<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { resolve } from '$app/paths';
  import { page } from '$app/state';

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

<nav
  class={[
    'grid w-full bg-grey text-blue no-underline print:invisible print:h-0',
    className,
  ]}
>
  <h1 class="col-[1/1] row-[1/1] w-full max-w-[768px] paragraph p-s font-sans">
    <span class="font-serif font-bold">
      {website.title}
    </span>
    {website.body.replace('How Melnyczuk', '')}
  </h1>
  <span
    class="col-[1/1] row-[2/2] flex w-fit flex-row items-start [justify-items:flex-end] gap-xs px-s pt-0 pb-s md:col-[2/2] md:row-[1/1] md:m-auto md:mr-0 md:p-s"
  >
    {#each links as { href, regex, label } (href)}
      <a
        href={resolve(href)}
        class={[
          'h-min w-full rounded-xxs border border-blue p-xs align-middle font-sans text-p-s leading-[normal] no-underline',
          regex.test(page.url.pathname)
            ? 'bg-blue font-bold text-grey'
            : '[font-weight:inherit] text-blue',
        ]}
      >
        {label}
      </a>
    {/each}
  </span>
</nav>
