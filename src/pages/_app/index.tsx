import 'modern-css-reset';
import './_app.scss';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ComponentProps, FC } from 'react';

import { Navigation, SEO } from '../../components';

const metadata: ComponentProps<typeof SEO> = {
  description:
    'Howard Melnyczuk is an artist investigating technology as the site in which political structures are built and maintained.',
  image: '/icons/icon.png',
  title: 'Howard Melnyczuk',
  twitterUsername: '@melnyczuk',
  url: 'https://melnycz.uk',
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <SEO {...metadata} />
    <Navigation router={router} description={metadata.description} />
    <Component {...pageProps} />
  </>
);

export default App;
