<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  import type { ImageType } from '../../types';
  import styles from './Image.module.scss';

  type ImageProps = Pick<
    ImageType,
    'name' | 'src' | 'thumbnail' | 'width' | 'height'
  > & { class?: ClassValue };

  let {
    class: className,
    src,
    thumbnail,
    name,
    width,
    height,
  }: ImageProps = $props();

  let loading = $state(true);

  // Show the thumbnail until the full image has loaded
  $effect(() => {
    loading = true;
    const img = new window.Image();
    img.onload = () => (loading = false);
    img.src = src;
    return () => (img.onload = null);
  });
</script>

<svg class={styles['monochrome']}>
  <filter
    id="monochrome"
    color-interpolation-filters="sRGB"
    x="0"
    y="0"
    height="100%"
    width="100%"
  >
    <!-- #00309c as rgb percentages is r: 0%, g: 18.8%, b: 61.2% -->
    <feColorMatrix
      type="matrix"
      values="0 0 0 0 0.000 0 0 0 0 0.188 0 0 0 0 0.612 1 0 0 0 0"
    />
  </filter>
</svg>
<img
  class={[styles['image'], loading && styles['image__thumbnail'], className]}
  {width}
  {height}
  src={loading ? thumbnail : src}
  alt={name}
  loading="lazy"
/>
