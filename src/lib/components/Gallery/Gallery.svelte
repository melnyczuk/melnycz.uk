<script lang="ts">
  import type { ImageType } from '../../types';
  import Image from '../Image/Image.svelte';
  import styles from './Gallery.module.scss';

  type GalleryProps = {
    images: ImageType[];
    onClose: () => void;
  };

  let { images, onClose }: GalleryProps = $props();
</script>

<div
  class={styles['gallery']}
  tabindex="0"
  role="button"
  aria-label="close"
  onkeydown={onClose}
  onclick={onClose}
>
  {#each images as image (image.name)}
    <Image
      class={styles['gallery__image']}
      name={image.name}
      src={image.src}
      width={image.width}
      height={image.height}
      thumbnail={image.thumbnail}
    />
  {/each}
</div>
