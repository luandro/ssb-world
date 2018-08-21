import React from 'react'

export default function Header ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <p>{t('common:pureComponent')}</p>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 600px;
          background: url(/static/background_b.jpg);
          background-size: contain;
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
