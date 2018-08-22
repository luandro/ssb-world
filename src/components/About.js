import React from 'react'
import Markdown from './Markdown'

export default function PureComponent ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <img src="/static/ssb_learning_b.png" />
        <Markdown
          t={t}
          input={`## WELCOME TO SSB\n\nSecure Scuttlebutt is a decent(ralised) secure gossip platform with social in mind. Dwelling within this platform is a thriving community of **people** who are together figuring out ways to cooperate non-hierarchically and non-violently with our selves, others and the ecosystem.`}
          largeWidth="55%"
        />
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding-top: 25px;
          background: #E1EEF6;
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
