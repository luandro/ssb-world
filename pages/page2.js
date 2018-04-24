import React from 'react'
import Link from 'next/link'

import PureComponent from '../components/PureComponent'
import { withI18next } from '../lib/withI18next'

export default withI18next(['page2', 'common'])(({ t, initialI18nStore }) => (
  <div>
    <h1>{t('welcomePage2')}</h1>
    <PureComponent t={t} />
    <Link href='/'>
      <a>{t('link.gotoPage1')}</a>
    </Link>
  </div>
))
