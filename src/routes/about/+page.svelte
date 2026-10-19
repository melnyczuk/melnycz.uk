<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { body, links } = $derived(data.about);
</script>

<Navigation />
<main
  class="z-0 flex w-full flex-col gap-xs paragraph border-t border-blue bg-grey text-blue md:grid md:grid-cols-[50%_50%] [&_h2]:heading-xl"
>
  <div class="flex flex-col gap-xs paragraph p-s md:col-[1/1] md:self-baseline">
    <h2>About</h2>
    <Markdown {body} />
  </div>
  <div
    class="flex flex-col gap-xs border-t border-blue p-s md:col-[2/2] md:self-baseline md:[border-top:none]"
  >
    <h2>Contact</h2>
    <div class="flex flex-col items-start gap-xxs leading-[initial]">
      {#each links as { name, url } (name)}
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external links -->
        <a href={url}>{name}</a>
      {/each}
    </div>
  </div>
</main>
