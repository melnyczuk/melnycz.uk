<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

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
    'rounded-xxs border border-blue px-xs text-center leading-[150%] transition-[background-color] delay-0',
    didCopy === null
      ? 'bg-inherit duration-[2s] ease-[ease-out]'
      : 'duration-0 ease-[step-start]',
    didCopy === true && 'bg-blue-highlight',
    didCopy === false && 'bg-red',
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
