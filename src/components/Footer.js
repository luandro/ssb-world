import React from 'react'
import c from '../utils/colors'

export default function Footer ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <p>{t('common:pureComponent')}</p>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 40px;
          background: ${c.primary};
        }
        .container {
          width: 90%;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .container {
            width: 940px;
          }
        }
      `}</style>
    </div>
  )
}
