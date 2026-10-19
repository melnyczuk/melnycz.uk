<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  import styles from './ClipboardCopyButton.module.scss';

  type ClipboardCopyButtonProps = {
    class?: ClassValue;
    children?: Snippet;
    content: string;
  };

  let {
    class: className,
    children,
    content,
  }: ClipboardCopyButtonProps = $props();

  let didCopy = $state<boolean | null>(null);
</script>

<button
  class={[
    styles['clipboard-copy__button'],
    {
      [styles['clipboard-copy__button--copied']]: didCopy === true,
      [styles['clipboard-copy__button--copy-failed']]: didCopy === false,
    },
    className,
  ]}
  onclick={() =>
    navigator.clipboard
      .writeText(content)
      .then(() => (didCopy = true))
      .catch(() => (didCopy = false))
      .finally(() => setTimeout(() => (didCopy = null), 50))}
>
  {@render children?.()}
</button>
