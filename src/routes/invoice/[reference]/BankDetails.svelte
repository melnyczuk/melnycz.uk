<script lang="ts">
  import type { Currency, InvoiceType } from '#lib/types.js';

  type BankDetailsProps = {
    details: InvoiceType['bankDetails'][Currency];
    reference: string;
  };

  let { details, reference }: BankDetailsProps = $props();
</script>

<div class="col-1 row-1 flex flex-col p-xs">
  <h3 class="px-0 py-xs">Bank Details</h3>
  <div class="grid grid-cols-[1fr_2fr]">
    {#each details as { key, value } (key)}
      <span
        class="odd:col-1 odd:border-r odd:border-r-blue odd:text-left even:col-2 even:px-xs even:py-0 even:text-left"
        >{key}</span
      >
      <span
        class="odd:col-1 odd:border-r odd:border-r-blue odd:text-left even:col-2 even:px-xs even:py-0 even:text-left"
        >{value}</span
      >
    {/each}
    <span
      class="odd:col-1 odd:border-r odd:border-r-blue odd:text-left even:col-2 even:px-xs even:py-0 even:text-left"
      >Reference</span
    >
    <span
      class="odd:col-1 odd:border-r odd:border-r-blue odd:text-left even:col-2 even:px-xs even:py-0 even:text-left"
      >{reference}</span
    >
  </div>
</div>
