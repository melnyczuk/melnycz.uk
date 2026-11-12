<script lang="ts">
  import { Markdown } from '#lib/components';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { about, contact, education, jobs, projects, skills } = $derived(
    data.cv
  );

  // Each section: margin `0 xs xs` unless overridden, no heading margins
  const item = 'mr-xs mb-xs [&_:is(h1,h2,h3,h4)]:m-0';

  // Lists are unstyled, except in jobs
  const lists =
    '[&_ul]:m-0 [&_ul]:list-none [&_ul]:p-0 print:[&_ul]:[font-size:small]';
</script>

<main
  class="grid w-full grid-cols-[33%_33%_33%] paragraph bg-grey text-blue print:bg-white [&_hr]:[border-width:0] [&_p]:mx-0 [&_p]:my-xxs print:[&_p]:[font-size:small]"
>
  <h1 class={[item, 'col-[1/3] row-[1/1] mt-0 ml-xs']}>Howard Melnyczuk</h1>
  <Markdown
    class={[item, lists, 'col-[1/3] row-[2/2] mt-0 ml-xs']}
    body={about}
  />
  <Markdown
    class={[item, lists, 'col-[3/3] row-[1/1] mt-0 ml-s [&_h1]:invisible']}
    body={contact}
  />
  <Markdown
    class={[item, lists, 'col-[3/3] row-[2/2] mt-0 ml-s']}
    body={education}
  />
  <Markdown
    class={[
      item,
      'col-[1/3] row-[3/6] mt-0 ml-xs [&_h4>em]:float-right',
      "print:[&_ul]:[font-size:small] [&>ul]:my-0 [&>ul]:mr-0 [&>ul]:ml-[13px] [&>ul]:list-outside [&>ul]:[list-style-type:'–_'] [&>ul]:p-0",
    ]}
    body={jobs}
  />
  <Markdown
    class={[
      item,
      lists,
      'col-[1/4] row-[6/6] mt-m ml-xs [&_h3>em]:float-right',
    ]}
    body={projects}
  />
  <Markdown
    class={[item, lists, 'col-[3/3] row-[3/3] mt-0 ml-s']}
    body={skills}
  />
</main>
