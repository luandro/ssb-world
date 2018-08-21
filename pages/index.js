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
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
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
    `}</style>
  </div>
))
