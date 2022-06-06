enum Currency {
  EUR,
  GBP,
}

const reference = '';
const issueDate = '';
const dueDate = '';
const currency = Currency.EUR;
const showVatDisclaimer = false;

const currencySymbol = {
  [Currency.EUR]: '€',
  [Currency.GBP]: '£',
};

const bankDetails = {
  [Currency.EUR]: [
    { key: 'Name', value: '' },
    { key: 'IBAN', value: '' },
    { key: 'BIC', value: '' },
  ],
  [Currency.GBP]: [
    { key: 'Name', value: '' },
    { key: 'Account Number', value: '' },
    { key: 'Sort Code', value: '' },
  ],
};

const address = [];

const client = [];

const services = [
  {
    description: '',
    rate: 0,
    days: 0,
  },
];

export default {
  address,
  bankDetails,
  client,
  currency,
  currencySymbol,
  dueDate,
  issueDate,
  reference,
  showVatDisclaimer,
  services,
};
