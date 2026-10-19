import fs from 'node:fs';
import path from 'node:path';

import { error } from '@sveltejs/kit';

import type { InvoiceType } from '#lib/types.js';

import type { EntryGenerator, PageServerLoad } from './$types';

// Build with `INVOICE_PATH=/path/to/<reference> pnpm build` to generate an invoice
const invoicePath = process.env.INVOICE_PATH ?? '';

export const entries: EntryGenerator = () =>
  !fs.existsSync(invoicePath)
    ? []
    : [{ reference: path.basename(invoicePath) }];

export const load: PageServerLoad = () => {
  if (!fs.existsSync(invoicePath)) error(404, 'Invoice not found');
  const invoice: InvoiceType = JSON.parse(
    fs.readFileSync(invoicePath, 'utf-8')
  );
  return { invoice };
};
