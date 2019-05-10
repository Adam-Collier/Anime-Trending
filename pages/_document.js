/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css
You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'
import { useAmp } from "next/amp";

const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <body>
          <Main />
          {/* <NextScript /> */}

          {isProduction && (
            <>
              <Script src={serviceWorkerRegistration} />
            </>
          )}
        </body>
      </html>
    )
  }
}

const Script = ({ src }) => {
  const isAmp = useAmp();

  // if (isAmp) {
  //   return (
  //     <amp-script type="text/javascript" layout="container" dangerouslySetInnerHTML={{ __html: src }} />
  //   )
  // }

  return (
    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: src }} />
  );
};

const clientSideJS = `
  document.addEventListener('DOMContentLoaded', event => {
    const checkbox = document.querySelector('input[name=dark]')
    document.querySelector('select[name=language]').addEventListener('change', submit)
    document.querySelector('select[name=time]').addEventListener('change', submit)
    checkbox.addEventListener('change', submit)
    function submit () {
      checkbox.value = checkbox.checked
      document.tune.submit()
    }
  })
`;

const serviceWorkerRegistration = `
  document.addEventListener('DOMContentLoaded', event => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/_next/static/service-worker.js', { scope: "/" }).then(registration => {
          console.log('SW registered: ', registration)
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  })
`;
