<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import styles from '../feed.module.scss';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { title, date, body, image } = $derived(data.post);
</script>

<Navigation />
<main class={[styles['feed'], styles['feed__entry']]}>
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
  </div>
  <Markdown class={styles['feed__body']} {body} />
</main>
