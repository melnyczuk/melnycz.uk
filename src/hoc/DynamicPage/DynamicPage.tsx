import { useRouter } from 'next/router';

import StaticPage from '../StaticPage';

export default (dynamic) => (component) => () => {
  const { query: { [dynamic]: namespace } } = useRouter();

  return (typeof namespace !== 'string') 
    ? null 
    : StaticPage(namespace)(component)({ namespace });
};
