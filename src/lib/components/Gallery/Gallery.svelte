<script lang="ts">
  import type { ImageType } from '../../types';
  import Image from '../Image/Image.svelte';

  type GalleryProps = {
    images: ImageType[];
    onClose: () => void;
  };

  let { images, onClose }: GalleryProps = $props();
</script>

<div
  class="fixed top-0 left-0 z-1 flex h-full w-full flex-col items-center justify-start gap-s overflow-y-scroll p-m"
  tabindex="0"
  role="button"
  aria-label="close"
  onkeydown={onClose}
  onclick={onClose}
>
  {#each images as image (image.name)}
    <Image
      class="max-h-[90vh] md:w-[70%]"
      name={image.name}
      src={image.src}
      width={image.width}
      height={image.height}
      thumbnail={image.thumbnail}
    />
  {/each}
</div>
