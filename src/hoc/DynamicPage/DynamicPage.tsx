import { useRouter } from 'next/router';

import StaticPage from '../StaticPage';

// TODO: add Suspense
export default (dynamic) => (component) => () => {
  const { [dynamic]: namespace  } = useRouter().query;
  return !namespace ? null : StaticPage(namespace)(component)({ namespace });
};
