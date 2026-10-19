// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { WebsiteMetadataType } from '#lib/types.js';

declare global {
  namespace App {
    interface PageData {
      website: WebsiteMetadataType;
    }
  }
}

export {};
