import classnames from 'classnames';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, Fragment, useCallback, useMemo } from 'react';

import { Currency, InvoiceType } from '../../types';
import styles from './invoice.module.scss';

type BankDetailsProps = {
  details: InvoiceType['bankDetails'][Currency];
  reference: string;
};

const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;
const invoices = [];

const BankDetails: FC<BankDetailsProps> = ({ details, reference }) => (
  <div className={classnames(styles['bank-details'])}>
    <h3 className={classnames(styles['bank-details__title'])}>Bank Details</h3>
    <div className={classnames(styles['bank-details__details'])}>
      {details.map(({ key, value }) => (
        <Fragment key={key}>
          <span className={classnames(styles['bank-details__item'])}>
            {key}
          </span>
          <span className={classnames(styles['bank-details__item'])}>
            {value}
          </span>
        </Fragment>
      ))}
      <span className={classnames(styles['bank-details__item'])}>
        Reference
      </span>
      <span className={classnames(styles['bank-details__item'])}>
        {reference}
      </span>
    </div>
  </div>
);

type InvoiceProps = InvoiceType;

const InvoicePage: FC<InvoiceProps> = ({
  address,
  bankDetails,
  locale,
  client,
  currency,
  reference,
  showVatDisclaimer,
  services,
}) => {
  const total = useTotal(services.items);
  const formatMoney = useFormatMoney(currency, locale);
  const dates = useDates(reference, ONE_MONTH, locale);

  return (
    <main className={styles['main']}>
      <header className={classnames(styles['header'])}>
        <div className={classnames(styles['intro'])}>
          <h1>Invoice</h1>
          <div className={classnames(styles['intro__details'])}>
            <h2>#{reference}</h2>
            <span>{dates.issued}</span>
          </div>
        </div>
        <div className={classnames(styles['address'])}>
          {address.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
        <div className={classnames(styles['address'])}>
          {client.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
      </header>
      <div className={classnames(styles['content'])}>
        <table>
          <thead>
            <th>Services</th>
            <th>Day rate</th>
            <th>Unit ({services.unit})</th>
            {showVatDisclaimer && <th>VAT (20%)</th>}
            <th>Total</th>
          </thead>
          <tbody>
            {services.items.map(({ description, rate, quantity }) => (
              <tr key={description}>
                <td>{description}</td>
                <td>
                  <span className={classnames(styles['no-wrap'])}>
                    {formatMoney(rate)}
                  </span>
                </td>
                <td>
                  <span className={classnames(styles['no-wrap'])}>
                    {quantity}
                  </span>
                </td>
                {showVatDisclaimer && (
                  <td className={classnames(styles['reverse-charge'])}>
                    * reverse charge applies
                  </td>
                )}
                <td>
                  <span className={classnames(styles['no-wrap'])}>
                    {formatMoney(quantity * rate)}
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              {showVatDisclaimer && <td></td>}
              <td>Final Total</td>
              <td>{formatMoney(total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className={classnames(styles['footer'])}>
        <BankDetails details={bankDetails[currency]} reference={reference} />
        <div className={classnames(styles['total'])}>
          <div className={classnames(styles['total__details'])}>
            <span className={classnames(styles['total__item'])}>Total</span>
            <span className={classnames(styles['total__item'])}>
              {formatMoney(total)}
            </span>
            <span className={classnames(styles['total__item'])}>Due</span>
            <span className={classnames(styles['total__item'])}>
              {dates.due}
            </span>
          </div>
        </div>
        {showVatDisclaimer && (
          <span className={classnames(styles['disclaimer'])}>
            * Total excludes VAT. Client to account for the reverse charge
            output tax on the VAT exclusive price of items marked &apos;reverse
            charge&apos; at the relevant VAT rate as shown above.
          </span>
        )}
      </footer>
    </main>
  );
};

export default InvoicePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(invoices);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  InvoiceProps,
  { reference: string }
> = async ({ params }) => {
  if (!params) throw new Error('Params not found');
  const reference = params.reference.toUpperCase();
  const data = invoices[reference];
  return { props: { ...data, reference } };
};

function formatDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function useTotal(items: InvoiceType['services']['items']): number {
  return useMemo(
    (): number =>
      items.reduce((acc, { quantity, rate }) => acc + quantity * rate, 0),
    [items]
  );
}

function useFormatMoney(currency: string, locale: string) {
  return useCallback(
    (n: number) =>
      new Intl.NumberFormat(locale, { style: 'currency', currency }).format(n),
    [currency, locale]
  );
}

function useDates(
  reference: string,
  interval: number,
  locale: string
): Record<'issued' | 'due', string> {
  return useMemo(() => {
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
  }, [reference, interval, locale]);
}
