import 'modern-css-reset';
import './_app.scss';

import { AppProps } from 'next/app';
import { FC } from 'react';

import { SEO } from '../../components';

const Page: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <SEO />
    <Component {...pageProps} />
  </>
);

export default Page;
