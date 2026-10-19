<script lang="ts">
  import 'modern-css-reset/dist/reset.min.css';
  import '../app.scss';

  import type { LayoutProps } from './$types';

  let { data, children }: LayoutProps = $props();

  const website = $derived(data.website);
</script>

<svelte:head>
  <title>{website.title}</title>
  <link rel="canonical" href={website.url} />
  <link rel="shortcut icon" href={website.image} />
  <meta name="description" content={website.body} />
  <meta name="image" content={website.image} />
  <meta property="og:url" content={website.url} />
  <meta property="og:title" content={website.title} />
  <meta property="og:description" content={website.body} />
  <meta property="og:image" content={website.image} />
  <meta name="twitter:card" content="metadata.website.summary_large_image" />
  <meta name="twitter:creator" content={website.handle} />
  <meta name="twitter:title" content={website.title} />
  <meta name="twitter:description" content={website.body} />
  <meta name="twitter:image" content={website.image} />
</svelte:head>

{@render children()}
