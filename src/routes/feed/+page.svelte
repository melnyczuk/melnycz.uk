<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';
  import { resolve } from '$app/paths';

  import type { PageProps } from './$types';
  import styles from './feed.module.scss';

  let { data }: PageProps = $props();
</script>

<Navigation />
<main class={styles['feed']}>
  <ul class={styles['feed__list']}>
    {#each data.entries as { title, date, body, image } (date)}
      <li id={date} class={styles['feed__entry']}>
        <div class={styles['feed__info']}>
          <time datetime={date}>{date}</time>
          <h2>{title}</h2>
          {#if image}
            <img
              src={image.src}
              alt={image.caption ?? ''}
              width={image.width}
              height={image.height}
            />
          {/if}
          <a href={resolve('/feed/[slug]', { slug: date })}>Link</a>
        </div>
        <Markdown class={styles['feed__body']} {body} />
      </li>
    {/each}
  </ul>
</main>
