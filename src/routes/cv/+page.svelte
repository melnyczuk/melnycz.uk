<script lang="ts">
  import { Markdown } from '#lib/components';

  import type { PageProps } from './$types';
  import styles from './cv.module.scss';

  let { data }: PageProps = $props();

  const { about, contact, education, jobs, projects, skills } = $derived(
    data.cv
  );
</script>

<main class={styles['cv']}>
  <h1 class={[styles['cv__item'], styles['cv__name']]}>Howard Melnyczuk</h1>
  <Markdown class={[styles['cv__item'], styles['cv__about']]} body={about} />
  <Markdown
    class={[styles['cv__item'], styles['cv__contact']]}
    body={contact}
  />
  <Markdown
    class={[styles['cv__item'], styles['cv__education']]}
    body={education}
  />
  <Markdown class={[styles['cv__item'], styles['cv__jobs']]} body={jobs} />
  <Markdown
    class={[styles['cv__item'], styles['cv__projects']]}
    body={projects}
  />
  <Markdown class={[styles['cv__item'], styles['cv__skills']]} body={skills} />
</main>
