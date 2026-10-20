<script lang="ts">
  import type { PageProps } from './$types';
  import BankDetails from './BankDetails.svelte';

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

<main
  class="grid w-full grid-cols-[auto] grid-rows-[auto_auto_auto] paragraph bg-grey text-blue print:bg-white"
>
  <header class="col-1 row-1 mx-m my-0 grid grid-cols-[1fr_1fr] text-[18px]">
    <div class="col-1 row-2 flex flex-col justify-between p-xs">
      <h1>Invoice</h1>
      <div class="flex flex-col">
        <h2>#{reference}</h2>
        <span>{dates.issued}</span>
      </div>
    </div>
    <div class="col-2 row-auto flex flex-col justify-end p-xs text-right">
      {#each address as row (row)}
        <span>{row}</span>
      {/each}
    </div>
    <div class="col-2 row-auto flex flex-col justify-end p-xs text-right">
      {#each client as row (row)}
        <span>{row}</span>
      {/each}
    </div>
  </header>
  <div
    class="col-1 row-2 mx-m my-0 px-0 py-m [&_:is(td,th)]:m-0 [&_:is(td,th)]:w-min [&_:is(td,th)]:border [&_:is(td,th)]:border-blue [&_:is(td,th)]:p-xs [&_:is(td,th)]:text-left [&_table]:mx-auto [&_table]:my-0 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-[5px] [&_table]:border [&_table]:border-blue"
  >
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
              <span class="break-keep whitespace-nowrap [word-wrap:normal]"
                >{formatMoney(rate)}</span
              >
            </td>
            <td>
              <span class="break-keep whitespace-nowrap [word-wrap:normal]"
                >{quantity}</span
              >
            </td>
            {#if showVatDisclaimer}
              <td class="text-[12px]">* reverse charge applies</td>
            {/if}
            <td>
              <span class="break-keep whitespace-nowrap [word-wrap:normal]">
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
  <footer
    class="col-1 row-[3/3] mx-m my-0 grid grid-cols-[70%_30%] text-[18px]"
  >
    <BankDetails details={bankDetails[currency]} {reference} />
    <div class="col-2 flex flex-col justify-end p-xs text-[18px]">
      <div class="grid grid-cols-[1fr_1fr]">
        <span
          class="px-xs py-0 odd:col-1 odd:border-r odd:border-r-blue odd:text-right even:col-2 even:text-left"
          >Total</span
        >
        <span
          class="px-xs py-0 odd:col-1 odd:border-r odd:border-r-blue odd:text-right even:col-2 even:text-left"
          >{formatMoney(total)}</span
        >
        <span
          class="px-xs py-0 odd:col-1 odd:border-r odd:border-r-blue odd:text-right even:col-2 even:text-left"
          >Due</span
        >
        <span
          class="px-xs py-0 odd:col-1 odd:border-r odd:border-r-blue odd:text-right even:col-2 even:text-left"
          >{dates.due}</span
        >
      </div>
    </div>
    {#if showVatDisclaimer}
      <span class="col-[1/3] p-xs text-[14px]">
        * Total excludes VAT. Client to account for the reverse charge output
        tax on the VAT exclusive price of items marked 'reverse charge' at the
        relevant VAT rate as shown above.
      </span>
    {/if}
  </footer>
</main>
