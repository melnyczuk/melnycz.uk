# melnycz.uk

😘

this is the repo for the website for the work of the artist that is called how melnyczuk

## development

Built with [SvelteKit](https://svelte.dev/docs/kit) and prerendered to static files in `out/`.

```sh
nvm use          # Node version from .nvmrc
pnpm install
pnpm dev         # local dev server
pnpm build       # static site in out/
pnpm preview     # serve the built site
pnpm check       # type-check
pnpm lint        # prettier + eslint
```

Content lives in `src/lib/content` as markdown with front-matter.

- To add image metadata for a project: `pnpm images <project>.md`
- To build an invoice: `INVOICE_PATH=/path/to/<reference> pnpm build`
