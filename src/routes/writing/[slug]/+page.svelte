<script lang="ts">
  import { Markdown, Navigation } from '#lib/components';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { date, title, body } = $derived(data.post);
</script>

<Navigation />
<main
  class={[
    'paragraph border-t border-blue bg-grey text-blue',
    '[&_h1]:self-start [&_h1]:heading-xl [&_h2]:self-start [&_h2]:heading-l',
    '[&_p]:w-full [&_p]:[font-size:larger] [&_p_img]:w-full',
    '[&_blockquote]:border-l-3 [&_blockquote]:border-l-blue [&_blockquote]:pl-xs [&_blockquote]:italic',
  ]}
>
  <article
    class="flex flex-col gap-xs p-s md:max-w-[50%] md:border-r md:border-r-blue"
  >
    <h1>{title}</h1>
    <Markdown class="items-center" {body} />
  </article>
  <time
    class="bg-blue px-s py-xxs font-mono text-p-xs text-grey [text-decoration:unset] sm:text-p-s md:max-w-[50%] md:text-p-m lg:text-p-l xl:text-p-xl"
    datetime={date}>{date}</time
  >
</main>
