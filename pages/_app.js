import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Scrollbar from 'react-smooth-scrollbar'
import c from '../src/utils/colors'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet" />
        </Head>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          body {
            font-family: 'Lato', sans-serif;
            background: ${c.light};
            color: ${c.dark};
            padding: 0;
            margin: 0;
          }
          a {
            text-decoration: none;
            color: ${c.dark};
            position: relative;
          }
          a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: ${c.primary};
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s;
          }
          a:hover:before {
            visibility: visible;
            transform: scaleX(1);
            transform: scaleX(1);
          }
          h2 {
            font-weight: 100;
            font-size: 1.4em;
            margin-bottom: -10px;
          }
          p {
            font-size: 1em;
          }
          .markdown a {
            color: ${c.primary};
            font-weight: 600;
          }
          @media (min-width: 940px) {
            h2 {
              font-size: 2em;
            }
            p {
              font-size: 1.2em;
            }
          }
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
          @keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}
        `}</style>
      </Container>
    )
  }
}