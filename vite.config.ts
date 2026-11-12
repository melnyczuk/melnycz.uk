import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
      },
      adapter: adapter({ pages: 'out', assets: 'out' }),
      // Absolute asset URLs, so 404.html works when served for any path
      paths: { relative: false },
      // rss.xml and 404 aren't linked from any page, so the crawler won't find them
      prerender: {
        entries: ['*', '/rss.xml', '/404'],
        // The invoice route only has a page when INVOICE_PATH is set
        handleUnseenRoutes: ({ routes, message }) => {
          if (routes.some((route) => route !== '/invoice/[reference]')) {
            throw new Error(message);
          }
        },
      },
    }),
  ],
});
