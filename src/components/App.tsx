import Head from 'next/head';
import SiteTitle from './SiteTitle';
import Nav from './Nav';
import { sitetitle, metatitle, metadescription, navlabels } from '../../static/db/info.json';
import '../styles/App.scss'
import '../styles/Header.scss'
import '../styles/Main.scss'
import '../styles/Footer.scss'

export interface Props {
  page: string;
  children: JSX.Element[] | JSX.Element;
}

export default ({ page, children }: Props) => (
  <div className='app'>
    <Head>
      <title>{metatitle}</title>
      <meta name="description" content={metadescription}/>
      <link rel="stylesheet" href="./index.css"/>
    </Head>
    <header className='header'>
      <SiteTitle title={sitetitle} />
      <Nav active={page} labels={navlabels} />
    </header>
    <main className='main'>
      {children}
    </main>
    <footer />
  </div>
);
;
