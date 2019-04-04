import Head from 'next/head';
import Header from './Header';

const Layout = props => (
  <div>
    <Head>
      <title>AnimeBeast</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="Description"
        content="Anime Beast. the best place for trending Anime."
      />
    </Head>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Layout;
