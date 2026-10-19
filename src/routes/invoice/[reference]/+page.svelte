<script lang="ts">
  import type { PageProps } from './$types';
  import BankDetails from './BankDetails.svelte';
  import styles from './invoice.module.scss';

  const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

  let { data }: PageProps = $props();

  const {
    address,
    bankDetails,
    locale,
    client,
    currency,
    reference,
    showVatDisclaimer,
    services,
  } = $derived(data.invoice);

  const total = $derived(
    services.items.reduce((acc, { quantity, rate }) => acc + quantity * rate, 0)
  );

  const formatMoney = $derived((n: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(n)
  );

  const dates = $derived(getDates(reference, ONE_MONTH, locale));

  function formatDate(date: Date, locale: string) {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  function getDates(
    reference: string,
    interval: number,
    locale: string
  ): Record<'issued' | 'due', string> {
    const datestring = reference
      .split(/[a-zA-z]+/)
      .filter(({ length }) => length >= 8)[0]
      .slice(0, 8);

    const issued = new Date(
      Number(datestring.slice(0, 4)),
      Number(datestring.slice(4, 6)) - 1,
      Number(datestring.slice(6))
    );

    const due = new Date(issued.getTime() + interval);

    return { issued: formatDate(issued, locale), due: formatDate(due, locale) };
  }
</script>

<main class={styles['main']}>
  <header class={styles['header']}>
    <div class={styles['intro']}>
      <h1>Invoice</h1>
      <div class={styles['intro__details']}>
        <h2>#{reference}</h2>
        <span>{dates.issued}</span>
      </div>
    </div>
    <div class={styles['address']}>
      {#each address as row (row)}
        <span>{row}</span>
      {/each}
    </div>
    <div class={styles['address']}>
      {#each client as row (row)}
        <span>{row}</span>
      {/each}
    </div>
  </header>
  <div class={styles['content']}>
    <table>
      <thead>
        <tr>
          <th>Services</th>
          <th>Day rate</th>
          <th>Unit ({services.unit})</th>
          {#if showVatDisclaimer}<th>VAT (20%)</th>{/if}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {#each services.items as { description, rate, quantity } (description)}
          <tr>
            <td>{description}</td>
            <td>
              <span class={styles['no-wrap']}>{formatMoney(rate)}</span>
            </td>
            <td>
              <span class={styles['no-wrap']}>{quantity}</span>
            </td>
            {#if showVatDisclaimer}
              <td class={styles['reverse-charge']}>* reverse charge applies</td>
            {/if}
            <td>
              <span class={styles['no-wrap']}>
                {formatMoney(quantity * rate)}
              </span>
            </td>
          </tr>
        {/each}
        <tr>
          <td></td>
          <td></td>
          {#if showVatDisclaimer}<td></td>{/if}
          <td>Final Total</td>
          <td>{formatMoney(total)}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <footer class={styles['footer']}>
    <BankDetails details={bankDetails[currency]} {reference} />
    <div class={styles['total']}>
      <div class={styles['total__details']}>
        <span class={styles['total__item']}>Total</span>
        <span class={styles['total__item']}>{formatMoney(total)}</span>
        <span class={styles['total__item']}>Due</span>
        <span class={styles['total__item']}>{dates.due}</span>
      </div>
    </div>
    {#if showVatDisclaimer}
      <span class={styles['disclaimer']}>
        * Total excludes VAT. Client to account for the reverse charge output
        tax on the VAT exclusive price of items marked 'reverse charge' at the
        relevant VAT rate as shown above.
      </span>
    {/if}
  </footer>
</main>
