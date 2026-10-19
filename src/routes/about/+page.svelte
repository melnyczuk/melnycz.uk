<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import type { PageProps } from './$types';
  import styles from './about.module.scss';

  let { data }: PageProps = $props();

  const { body, links } = $derived(data.about);
</script>

<Navigation />
<main class={styles['about']}>
  <div class={styles['about__about']}>
    <h2>About</h2>
    <Markdown {body} />
  </div>
  <div class={styles['about__contact']}>
    <h2>Contact</h2>
    <div class={styles['flex']}>
      {#each links as { name, url } (name)}
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external links -->
        <a href={url}>{name}</a>
      {/each}
    </div>
  </div>
</main>
