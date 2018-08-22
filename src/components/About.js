import React from 'react'
import Markdown from './Markdown'
import c from '../utils/colors'

export default function PureComponent ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <img src="/static/ssb_learning_b.png" />
        <Markdown
          t={t}
          input={`## LEARN MORE\n\nThere are some awesome resources if you want to dive in deeper. Check out the [SSB HANDBOOK]() to get a full overview of the Scuttleverse. In case you want to really understand how the protocol works check out the [PROTOCOL DOCS](). If you’re a developer you can explore and try our [API]() or follow the [SCUTTLEBUTT GUIDE]().`}
          largeWidth="55%"
        />
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding-top: 25px;
          background: ${c.complementary};
        }
        .wrapper:after,
        .wrapper::after {
            position: relative;
            top: 157px;
            content: '';
            width: 0;
            height: 0;
            border-top: solid 140px #E1EEF6;
            border-left: solid calc(100vw/2) transparent;
            border-right: solid calc(100vw/2) transparent;
        }
        .container {
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
        img {
          max-height: 100px;
        }
        @media (min-width: 640px) {
          .container {
            flex-flow: row;
            width: 600px;
          }
          img {
            padding-right: 5%;
          }
        }
        @media (min-width: 1024px) {
          .wrapper {
            padding-top: 80px;
          }
          .container {
            width: 940px;
          }
          img {
            padding-right: 0;
            max-height: 100%;
          }
        }
      `}</style>
    </div>
  )
}
