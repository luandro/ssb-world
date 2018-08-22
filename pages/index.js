import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import c from '../src/utils/colors'
import { withI18next } from '../src/utils/withI18next'

import PureComponent from '../src/components/PureComponent'
import ExtendedComponent from '../src/components/ExtendedComponent'
import ComponentWithTrans from '../src/components/ComponentWithTrans'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import About from '../src/components/About'
import AppList from '../src/components/AppList'
import Footer from '../src/components/Footer'

export default withI18next(['home', 'common'])(({ t, initialI18nStore }) => (
  <div>
    <Head>
      <title>SSB Worlde</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet" />
    </Head>
    <Navbar />
    <Header t={t} />
    <About t={t} />
    <AppList t={t} />
    <Link href='/page2'>
      <a>{t('link.gotoPage2')}</a>
    </Link>
    <Footer t={t} />
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
        background-color: #000;
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
      @media (min-width: 940px) {
        h2 {
          font-size: 2em;
        }
        p {
          font-size: 1.2em;
        }
      }
    `}</style>
  </div>
))
