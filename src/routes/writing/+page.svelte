<script lang="ts">
  import { Navigation } from '#lib/components';
  import { resolve } from '$app/paths';

  import type { PageProps } from './$types';
  import styles from './writing.module.scss';

  let { data }: PageProps = $props();
</script>

<Navigation />
<main class={styles['writing_index']}>
  <ul>
    {#each data.posts as { slug, title, date } (slug)}
      <li>
        <a
          href={resolve('/writing/[slug]', { slug })}
          class={styles['writing_index__item']}
        >
          <time datetime={date}>{date}</time>
          <h2>{title}</h2>
        </a>
      </li>
    {/each}
  </ul>
</main>
