import React from 'react'
import Link from 'next/link'
import c from '../utils/colors'
import Headroom from 'react-headroom'

export default function Navbar () {
  return (
    <Headroom>
      <div className="container">
        <h1><span>Ss</span><span>b</span> World <span>BETA</span></h1>
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
        .container {
          width: 100%;
          background: ${c.light};
          z-index: 99;
          padding: 10px 0;
          box-shadow: 0 0 3px 0;
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
          font-weight: 100;
          animation: text-flicker-in-glow 3.5s linear both;
        }
        @keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35),0 0 100px rgba(250,130,1,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35),0 0 100px rgba(250,130,1,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.4),0 0 110px rgba(250,130,1,.2),0 0 100px rgba(250,130,1,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.4),0 0 110px rgba(250,130,1,.2),0 0 100px rgba(250,130,1,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.6),0 0 60px rgba(250,130,1,.45),0 0 110px rgba(250,130,1,.25),0 0 100px rgba(250,130,1,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.6),0 0 60px rgba(250,130,1,.45),0 0 110px rgba(250,130,1,.25),0 0 100px rgba(250,130,1,.1)}}@keyframes text-flicker-in-glow{0%{opacity:0}10%{opacity:0;text-shadow:none}10.1%{opacity:1;text-shadow:none}10.2%{opacity:0;text-shadow:none}20%{opacity:0;text-shadow:none}20.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.25)}20.6%{opacity:0;text-shadow:none}30%{opacity:0;text-shadow:none}30.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}30.5%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}30.6%{opacity:0;text-shadow:none}45%{opacity:0;text-shadow:none}45.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}50%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}55%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.45),0 0 60px rgba(250,130,1,.25)}55.1%{opacity:0;text-shadow:none}57%{opacity:0;text-shadow:none}57.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35)}60%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35)}60.1%{opacity:0;text-shadow:none}65%{opacity:0;text-shadow:none}65.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35),0 0 100px rgba(250,130,1,.1)}75%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.35),0 0 100px rgba(250,130,1,.1)}75.1%{opacity:0;text-shadow:none}77%{opacity:0;text-shadow:none}77.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.4),0 0 110px rgba(250,130,1,.2),0 0 100px rgba(250,130,1,.1)}85%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.55),0 0 60px rgba(250,130,1,.4),0 0 110px rgba(250,130,1,.2),0 0 100px rgba(250,130,1,.1)}85.1%{opacity:0;text-shadow:none}86%{opacity:0;text-shadow:none}86.1%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.6),0 0 60px rgba(250,130,1,.45),0 0 110px rgba(250,130,1,.25),0 0 100px rgba(250,130,1,.1)}100%{opacity:1;text-shadow:0 0 30px rgba(250,130,1,.6),0 0 60px rgba(250,130,1,.45),0 0 110px rgba(250,130,1,.25),0 0 100px rgba(250,130,1,.1)}}
        h1 span {
          color: ${c.primary};
          font-weight: 900;
        }
        h1 span:nth-child(2) {
          color: ${c.secondary};
        }
        h1 span:nth-child(3) {
          color: ${c.primary};
          margin-left: -5px;
          font-weight: 100;
          font-size: 0.7em;
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
        img {
          width: 25px;
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
    </Headroom>
  )
}
