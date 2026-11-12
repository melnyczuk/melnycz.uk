<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';
  import { resolve } from '$app/paths';

  import type { PageProps } from './$types';
  import {
    entry,
    feedBody,
    info,
    infoHeading,
    infoImage,
    infoTime,
  } from './styles';

  let { data }: PageProps = $props();
</script>

<Navigation />
<main class="flex flex-col paragraph bg-grey text-blue">
  <ul class="m-0 flex list-none flex-col border-b border-blue p-0">
    {#each data.entries as { title, date, body, image } (date)}
      <li id={date} class={entry}>
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
          <a class="w-min" href={resolve('/feed/[slug]', { slug: date })}
            >Link</a
          >
        </div>
        <Markdown class={feedBody} {body} />
      </li>
    {/each}
  </ul>
</main>
