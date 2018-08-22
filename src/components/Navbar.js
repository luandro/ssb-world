import React from 'react'
import Link from 'next/link'
import c from '../utils/colors'

export default function Navbar () {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="chrome"><span>Ss</span><span>b</span> World</h1>
        <div>
          <Link href='/?lng=pt'>
            <a>Portugues</a>
          </Link>
          <Link href=''>
            <a><img src="/static/git.png" /></a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          position: fixed;
          top: 0;
          background: ${c.light};
          box-shadow: 0 0 3px 0;
          z-index: 99;
          padding: 20px 0;
        }
        .container {
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: space-around;
        }
        h1 {
          font-size: 1em;
          width: 60%;
          color: ${c.dark};
          text-transform: uppercase;
          padding-left: 15px;
        }
        h1 span {
          color: ${c.primary};
        }
        h1 span:nth-child(2) {
          color: ${c.secondary};
        }
        .container div {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .container div * {
          padding: 0 5px;
        }
        .container div:nth-last-child(1) {
          padding-right: 30px;
        }
        @media (min-width: 640px) {
          .container div {
            width: 70%;
          }
        }
        @media (min-width: 1024px) {
          .wrapper {
            padding: 10px 0;
          }
          h1 {
            font-size: 1.2em;
            padding-left: 20%;
            padding-left: calc((100vw - 940px)/2) 
          }
          .container div * {
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  )
}
