<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import {
    entry,
    feedBody,
    info,
    infoHeading,
    infoImage,
    infoTime,
  } from '../styles';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { title, date, body, image } = $derived(data.post);
</script>

<Navigation />
<main class={['paragraph bg-grey text-blue', entry]}>
  <div class={info}>
    <time class={infoTime} datetime={date}>{date}</time>
    <h2 class={infoHeading}>{title}</h2>
    {#if image}
      <img
        class={infoImage}
        src={image.src}
        alt={image.caption ?? ''}
        width={image.width}
        height={image.height}
      />
    {/if}
  </div>
  <Markdown class={feedBody} {body} />
</main>
