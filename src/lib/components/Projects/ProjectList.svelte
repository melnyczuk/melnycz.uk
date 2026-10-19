<script lang="ts">
  import type { ProjectType } from '../../types';
  import Gallery from '../Gallery/Gallery.svelte';
  import Image from '../Image/Image.svelte';
  import Markdown from '../Markdown/Markdown.svelte';
  import Navigation from '../Navigation/Navigation.svelte';
  import styles from './projects.module.scss';

  let { projects }: { projects: ProjectType[] } = $props();

  let openGallery = $state<string | null>(null);

  const galleryImages = $derived(
    openGallery === null
      ? null
      : (projects.find(({ name }) => name === openGallery)?.images ?? [])
  );
</script>

<Navigation class={openGallery ? styles['nav--blur'] : undefined} />
<main class={styles['projects']}>
  <section
    class={[
      styles['projects__list'],
      openGallery && styles['projects__list--blur'],
    ]}
  >
    {#each projects as { name, hero, body, year } (name)}
      <article
        id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
        class={styles['project']}
      >
        <div class={styles['project__info']}>
          <time datetime={`${year}`}>{year}</time>
          <h2>{name}</h2>
        </div>
        <Markdown class={styles['project__text']} {body} />
        <div
          class={styles['project__gallery_button']}
          tabindex="0"
          role="button"
          aria-label="open image gallery"
          onkeydown={() => (openGallery = name)}
          onclick={() => (openGallery = name)}
        >
          <Image
            class={styles['project__image']}
            name={hero.name}
            src={hero.src}
            width={hero.width}
            height={hero.height}
            thumbnail={hero.thumbnail}
          />
        </div>
      </article>
    {/each}
  </section>
  {#if galleryImages !== null}
    <section class={styles['projects__gallery']}>
      <Gallery images={galleryImages} onClose={() => (openGallery = null)} />
    </section>
  {/if}
</main>
