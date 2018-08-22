import React from 'react'
import Markdown from './Markdown'
import AppListNavbar from './AppListNavbar'

export default function AppList ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
      <Markdown
        className="text"
        t={t}
        input={`## ENTER THE SCUTTLEVERSE`}
        align="center"
        largeWidth="250px"
        margin="0 auto"
      />
      <img src="/static/ssb_diving_b.png" />
      <AppListNavbar t={t} />
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding-top: 180px;
          text-align: center;
        }
        .container {
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-flow: column;
          align-items: center;
        }
        img {
          order: -1;
        }
        @media screen and (min-width: 1024px) {
          .container {
            display: inherit;
          }
          img {
            float: right;
            position: relative;
            top: -100px;
            width: 30%;
          }
        }
        @media screen and (min-width: 1280px) {
          img {
           width: auto;
          }
        }
      `}</style>
    </div>
  )
}
