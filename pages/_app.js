import App, { Container } from 'next/app'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import withApolloClient from '../lib/with-apollo-client'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Component {...pageProps} />
        <style jsx global>
          {`
            * {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;
            }
            body {
              margin: 0;
              background: #1f202c;
              color: #fff;
            }
            .content {
              position: relative;
            }
            p {
              font-size: 14px;
              line-height: 24px;
            }
            article {
              margin: 0 auto;
              max-width: 650px;
            }
            button {
              align-items: center;
              background-color: #22bad9;
              border: 0;
              color: white;
              display: flex;
              padding: 5px 7px;
            }
            button:active {
              background-color: #1b9db7;
              transition: background-color 0.3s;
            }
            button:focus {
              outline: none;
            }
            a {
              text-decoration: none;
              color: #ffffff;
            }
          `}
        </style>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
