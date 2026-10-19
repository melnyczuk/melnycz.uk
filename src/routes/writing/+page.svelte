<script lang="ts">
  import { Navigation } from '#lib/components';
  import { resolve } from '$app/paths';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<Navigation />
<main class="flex flex-col bg-grey text-blue">
  <ul
    class="m-0 flex cursor-pointer list-none flex-col border-b border-blue p-0"
  >
    {#each data.posts as { slug, title, date } (slug)}
      <li class="border-t border-blue p-0 [font-size:xx-large]">
        <a
          href={resolve('/writing/[slug]', { slug })}
          class="flex flex-col leading-[normal] [color:unset] no-underline md:flex-row"
        >
          <time
            class="w-[150px] self-start paragraph px-s pt-s pb-0"
            datetime={date}>{date}</time
          >
          <h2
            class="w-full p-s heading-xl [@media(max-width:768px)]:pt-0 [@media(max-width:768px)]:[font-size:larger]"
          >
            {title}
          </h2>
        </a>
      </li>
    {/each}
  </ul>
</main>
