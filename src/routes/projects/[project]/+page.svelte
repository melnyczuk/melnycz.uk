<script lang="ts">
  import { Gallery, Image, Markdown, Navigation } from '#lib/components';
  import styles from '#lib/components/Projects/projects.module.scss';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const { name, body, year, images } = $derived(data.project);

  let openGallery = $state<string | null>(null);

  const galleryImage = $derived(
    images.find(({ name }) => name === openGallery) ?? null
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
    <article
      id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
      class={styles['project']}
    >
      <div class={styles['project__info']}>
        <time datetime={`${year}`}>{year}</time>
        <h2>{name}</h2>
      </div>
      <Markdown
        class={[styles['project__text'], styles['project__text--sticky']]}
        {body}
      />
      <div class={styles['project__image_list']}>
        {#each images as img (img.name)}
          <div
            tabindex="0"
            role="button"
            aria-label="open image gallery"
            onkeydown={() => (openGallery = img.name)}
            onclick={() => (openGallery = img.name)}
          >
            <Image
              class={styles['project__image']}
              name={img.name}
              src={img.src}
              width={img.width}
              height={img.height}
              thumbnail={img.thumbnail}
            />
          </div>
        {/each}
      </div>
    </article>
  </section>
  {#if galleryImage !== null}
    <section class={styles['projects__gallery']}>
      <Gallery images={[galleryImage]} onClose={() => (openGallery = null)} />
    </section>
  {/if}
</main>
