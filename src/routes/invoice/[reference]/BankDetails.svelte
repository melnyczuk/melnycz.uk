<script lang="ts">
  import type { Currency, InvoiceType } from '#lib/types.js';

  import styles from './invoice.module.scss';

  type BankDetailsProps = {
    details: InvoiceType['bankDetails'][Currency];
    reference: string;
  };

  let { details, reference }: BankDetailsProps = $props();
</script>

<div class={styles['bank-details']}>
  <h3 class={styles['bank-details__title']}>Bank Details</h3>
  <div class={styles['bank-details__details']}>
    {#each details as { key, value } (key)}
      <span class={styles['bank-details__item']}>{key}</span>
      <span class={styles['bank-details__item']}>{value}</span>
    {/each}
    <span class={styles['bank-details__item']}>Reference</span>
    <span class={styles['bank-details__item']}>{reference}</span>
  </div>
</div>
