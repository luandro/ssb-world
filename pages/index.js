import React from 'react'
import Link from 'next/link'

import PureComponent from '../components/PureComponent'
import ExtendedComponent from '../components/ExtendedComponent'
import ComponentWithTrans from '../components/ComponentWithTrans'
import { withI18next } from '../lib/withI18next'

export default withI18next(['home', 'common'])(({ t, initialI18nStore }) => (
  <div>
    <h1>{t('welcome')}</h1>
    <PureComponent t={t} />
    <Link href='/page2'>
      <a>{t('link.gotoPage2')}</a>
    </Link>
    <br />
    <Link href='/?lng=pt'>
      <a>Portugues</a>
    </Link>
  </div>
))
