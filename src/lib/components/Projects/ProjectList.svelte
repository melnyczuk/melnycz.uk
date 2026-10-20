<script lang="ts">
  import type { ProjectType } from '../../types';
  import Gallery from '../Gallery/Gallery.svelte';
  import Image from '../Image/Image.svelte';
  import Markdown from '../Markdown/Markdown.svelte';
  import Navigation from '../Navigation/Navigation.svelte';
  import { blur, project, projectInfo, projectText } from './styles';

  let { projects }: { projects: ProjectType[] } = $props();

  let openGallery = $state<string | null>(null);

  const galleryImages = $derived(
    openGallery === null
      ? null
      : (projects.find(({ name }) => name === openGallery)?.images ?? [])
  );
</script>

<Navigation class={openGallery ? blur : undefined} />
<main class="bg-grey text-blue">
  <section class={openGallery && blur}>
    {#each projects as { name, hero, body, year } (name)}
      <article
        id={name.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}
        class={project}
      >
        <div class={projectInfo}>
          <time class="paragraph" datetime={`${year}`}>{year}</time>
          <h2 class="heading-xl">{name}</h2>
        </div>
        <Markdown class={[projectText, 'md:row-2']} {body} />
        <div
          class="flex h-full flex-col object-cover md:col-2 md:row-[1/3] md:p-s"
          tabindex="0"
          role="button"
          aria-label="open image gallery"
          onkeydown={() => (openGallery = name)}
          onclick={() => (openGallery = name)}
        >
          <Image
            class="cursor-zoom-in"
            fit="cover"
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
    <section class="cursor-zoom-out">
      <Gallery images={galleryImages} onClose={() => (openGallery = null)} />
    </section>
  {/if}
</main>
