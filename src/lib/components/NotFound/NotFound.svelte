<script lang="ts">
  import { resolve } from '$app/paths';

  // The <p> repeats the <main> styles, as it always has
  const page404 =
    'flex flex-col items-center gap-xs bg-grey p-[96px] font-[-apple-system,Roboto,sans-serif,serif] text-blue';
</script>

<main class={page404}>
  <a
    class="mx-auto my-0 block text-center text-[50px] no-underline"
    href={resolve('/')}>¯\_(ツ)_/¯</a
  >
  <p class={page404}>404</p>
</main>
