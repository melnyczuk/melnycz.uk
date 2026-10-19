<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import { renderMarkdown } from '../../markdown';
  import type { MarkdownType } from '../../types';
  import styles from './Markdown.module.scss';

  type MarkdownProps = MarkdownType & { class?: ClassValue };

  let { body, class: className }: MarkdownProps = $props();

  const html = $derived(renderMarkdown(body));
</script>

<div class={[styles['text'], className]}>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- markdown is our own content -->
  {@html html}
</div>
