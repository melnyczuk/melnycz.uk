const formatDateWithMonth = (date: string): string => {
  const dt = new Date(date);
  const mnth = dt.getUTCMonth() + 1;
  const month = mnth >= 10 ? mnth : `0${mnth}`;
  return `${month}.${dt.getFullYear()}`;
};

export const formatMonthRange = (startDate: string, endDate: string): string =>
  `${formatDateWithMonth(startDate)}–${formatDateWithMonth(endDate)}`;

export const fetchRemoteContent = async (url: string): Promise<string> => {
  const resp = await fetch(url);
  return await resp.text();
};
