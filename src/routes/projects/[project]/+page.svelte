<script lang="ts">
  import {
    Gallery,
    Image,
    Markdown,
    Navigation,
    projectStyles,
  } from '#lib/components';

  import type { PageProps } from './$types';

  const { blur, project, projectInfo, projectText } = projectStyles;

  let { data }: PageProps = $props();

  const { name, body, year, images } = $derived(data.project);

  let openGallery = $state<string | null>(null);

  const galleryImage = $derived(
    images.find(({ name }) => name === openGallery) ?? null
  );
</script>

<Navigation class={openGallery ? blur : undefined} />
<main class="bg-grey text-blue">
  <section class={openGallery && blur}>
    <article
      id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
      class={project}
    >
      <div class={projectInfo}>
        <time class="paragraph" datetime={`${year}`}>{year}</time>
        <h2 class="heading-xl">{name}</h2>
      </div>
      <Markdown
        class={[projectText, 'md:sticky md:bottom-0 md:row-[2/3]']}
        {body}
      />
      <div class="flex flex-col gap-s md:col-2 md:row-[1/3] md:p-s">
        {#each images as img (img.name)}
          <div
            tabindex="0"
            role="button"
            aria-label="open image gallery"
            onkeydown={() => (openGallery = img.name)}
            onclick={() => (openGallery = img.name)}
          >
            <Image
              class="cursor-zoom-in"
              fit="cover"
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
    <section class="cursor-zoom-out">
      <Gallery images={[galleryImage]} onClose={() => (openGallery = null)} />
    </section>
  {/if}
</main>
