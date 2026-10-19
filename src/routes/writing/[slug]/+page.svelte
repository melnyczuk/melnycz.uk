<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import styles from '../writing.module.scss';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { date, title, body } = $derived(data.post);
</script>

<Navigation />
<main class={styles['writing_post']}>
  <article>
    <h1>{title}</h1>
    <Markdown class={styles['writing_post__body']} {body} />
  </article>
  <time datetime={date}>{date}</time>
</main>
