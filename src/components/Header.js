import React from 'react'
import Markdown from './Markdown'

export default function Header ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <Markdown
          t={t}
          input={`## WELCOME TO SSB\n\nSecure Scuttlebutt is a decent(ralised) secure gossip platform with social in mind. Dwelling within this platform is a thriving community of **people** who are together figuring out ways to cooperate non-hierarchically and non-violently with our selves, others and the ecosystem.`}
          width="80%"
          largeWidth="55%"
        />
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 400px;
          margin-top: 80px;
        }
        .container {
          margin: 0 auto;
          position: relative;
          top: 40px;
          right: 20px;
          
        }
        @media (min-width: 640px) {
          .container {
            width: 70%;
          }
        }
        @media (min-width: 940px) {
          .wrapper {
            height: 550px;
            background: url(/static/background_b.jpg);
            background-size: cover;
            background-position: 0 -100px;
          }
          .container {
            width: 70%;
          }
        }
        @media (min-width: 1024px) {
          .container {
            margin: inherit;
            width: 940px;
            top: 120px;
            right: -120px;
          }
        }
      `}</style>
    </div>
  )
}
