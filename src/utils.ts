export const sortChronologicallyBy = <T>(key: keyof T) => (
  a: T,
  b: T
): number => new Date(`${b[key]}`).valueOf() - new Date(`${a[key]}`).valueOf();

export const formatDateWithMonth = (date: string): string => {
  const dt = new Date(date);
  const mnth = dt.getUTCMonth() + 1;
  const month = mnth >= 10 ? mnth : `0${mnth}`;
  return `${month}.${dt.getFullYear()}`;
};

export const formatMonthRange = (startDate: string, endDate: string): string =>
  `${formatDateWithMonth(startDate)}–${formatDateWithMonth(endDate)}`;
