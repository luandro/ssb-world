import React from 'react'
import Link from 'next/link'
import DownloadButton from './DownloadButton'
import NoappIcon from './NoappIcon'
import c from '../utils/colors'

const source = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNy_2V2P_cAhUQM94KHRO2D8oQjRx6BAgBEAU&url=https%3A%2F%2Fscuttlebot.io%2Fdocs%2Fconfig%2Fcreate-a-pub.html&psig=AOvVaw26SMkI2fo4jpBOxqGexN29&ust=1534993933293786'

export default function AppItem ({ t, name, version, targets, icon, downloads, install, os }) {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <img src={source} /> */}
        <NoappIcon color={c.primary} />
        <h4>{name}</h4>
        <Link href="">
          <span><img src="/static/git.png" />v{version}</span>
        </Link>
        <p>A decentralized messaging and sharing app built using patchcore. The goal is to make a standalone, easy to install, "social" view into the SSB world.</p>
        <DownloadButton t={t} os={os} downloads={downloads} install={install} />
      </div>
      <style jsx>{`
        .wrapper {
          width: 90%;
          padding: 20px 0;
          margin: 0 auto;
        }
        .container {
          margin: 0 auto;
        }
        h4 {
          font-size: 1.4em;
          font-weight: 400;
          margin: 0 auto;
          padding: 10px 0;
        }
        img {
          width: 15px;
          padding-right: 5px;
        }
        span {
          font-size: 0.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        p {
          font-size: 0.8em;
          max-width: 85%;
          margin: 5px auto;
        }
        @media (min-width: 640px) {
          .wrapper {
            width: 45%;
          }
        }
        @media (min-width: 940px) {
          .wrapper {
            width: 30%;
          }
        }
        @media (min-width: 1024px) {
          // .wrapper {
          //   width: 24%;
          // }
          .container {
            // width: 940px;
          }
        }
      `}</style>
    </div>
  )
}
