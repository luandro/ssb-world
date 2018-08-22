import React from 'react'
import Head from 'next/head'
import { withI18next } from '../src/utils/withI18next'

import PureComponent from '../src/components/PureComponent'
import ExtendedComponent from '../src/components/ExtendedComponent'
import ComponentWithTrans from '../src/components/ComponentWithTrans'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import About from '../src/components/About'
import AppList from '../src/components/AppList'
import Footer from '../src/components/Footer'

export default withI18next(['common'])(({ t, initialI18nStore }) => (
  <div>
    <Head>
      <title>SSB World</title>
    </Head>
    <Navbar />
    <Header t={t} />
    <About t={t} />
    <AppList t={t} />
    <Footer t={t} />
  </div>
))
