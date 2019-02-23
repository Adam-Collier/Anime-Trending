import Head from "next/head";
import Header from "./Header";

const Layout = props => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Layout;
