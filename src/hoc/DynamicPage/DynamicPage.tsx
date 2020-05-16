import { useRouter } from 'next/router';

import StaticPage from '../StaticPage';

export interface DynamicPageProps {
  namespace: string;
}

export default (component) => () => {
  const {
    query: { page: namespace },
  } = useRouter();

  return typeof namespace !== 'string'
    ? null
    : StaticPage(namespace)(component)({ namespace });
};
