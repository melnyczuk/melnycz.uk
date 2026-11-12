<script lang="ts">
  import { ProjectList } from '#lib/components';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<ProjectList projects={data.projects} />
