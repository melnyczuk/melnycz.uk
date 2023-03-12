import classnames from 'classnames';
import { FC, Fragment, useMemo } from 'react';

import content from '../../content/invoice';
import styles from './invoice.module.scss';

type BankDetailsProps = {
  details: typeof content.bankDetails[keyof typeof content.bankDetails];
  reference: string;
};

const useTotal = () =>
  useMemo(
    () =>
      content.services
        .reduce((acc, { days, rate }) => acc + days * rate, 0)
        .toFixed(2),
    []
  );

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

const Invoice: FC = () => {
  const total = useTotal();

  return (
    <main className={styles['main']}>
      <header className={classnames(styles['header'])}>
        <div className={classnames(styles['intro'])}>
          <h1>Invoice</h1>
          <div className={classnames(styles['intro__details'])}>
            <h2>#{content.reference}</h2>
            <span>{content.issueDate}</span>
          </div>
        </div>
        <div className={classnames(styles['address'])}>
          {content.address.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
        <div className={classnames(styles['address'])}>
          {content.client.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
      </header>
      <div className={classnames(styles['content'])}>
        <table>
          <thead>
            <th>Services</th>
            <th>Day rate</th>
            <th>Unit (Days)</th>
            {content.showVatDisclaimer && <th>VAT (20%)</th>}
            <th>Total</th>
          </thead>
          <tbody>
            {content.services.map(({ description, rate, days }) => (
              <tr key={description}>
                <td>{description}</td>
                <td>
                  <span className={classnames(styles['no-wrap'])}>
                    {content.currencySymbol[content.currency]}
                    {rate}
                  </span>
                </td>
                <td>
                  <span className={classnames(styles['no-wrap'])}>{days}</span>
                </td>
                {content.showVatDisclaimer && (
                  <td className={classnames(styles['reverse-charge'])}>
                    * reverse charge applies
                  </td>
                )}
                <td>
                  <span className={classnames(styles['no-wrap'])}>
                    {content.currencySymbol[content.currency]}
                    {(days * rate).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              {content.showVatDisclaimer && <td></td>}
              <td>Final Total</td>
              <td>
                {content.currencySymbol[content.currency]}
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className={classnames(styles['footer'])}>
        <BankDetails
          details={content.bankDetails[content.currency]}
          reference={content.reference}
        />
        <div className={classnames(styles['total'])}>
          <div className={classnames(styles['total__details'])}>
            <span className={classnames(styles['total__item'])}>Total</span>
            <span className={classnames(styles['total__item'])}>
              {content.currencySymbol[content.currency]}
              {total}
            </span>
            <span className={classnames(styles['total__item'])}>Due</span>
            <span className={classnames(styles['total__item'])}>
              {content.dueDate}
            </span>
          </div>
        </div>
        {content.showVatDisclaimer && (
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

export default Invoice;
