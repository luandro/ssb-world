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
            <a>Github</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 80px;
          width: 100%;
          border-bottom: 1px solid ${c.dark};
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        h1 {
          width: 30%;
          padding-left: 20%;
          color: ${c.dark};
          text-transform: uppercase;
        }
        h1 span {
          color: ${c.primary};
        }
        h1 span:nth-child(2) {
          color: ${c.secondary};
        }
        .container div {
          width: 70%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .container div * {
          padding: 0 15px;
        }
        .container div:nth-last-child(1) {
          padding-right: 30px;
        }
        @media (min-width: 1024px) {
          h1 {
            padding-left: calc((100vw - 940px)/2) 
          }
        }
      `}</style>
    </div>
  )
}
