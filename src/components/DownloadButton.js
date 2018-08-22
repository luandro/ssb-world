import React from 'react'
import c from '../utils/colors'

export default function AppItem ({ t, sources, os }) {
  return (
    <div className="container">
      <div className="top">
        <button className="download">Download for {os}</button>
        <button className="more"><div className="arrow-down" /></button>
      </div>
      <button className="download">Download for Linux</button>
      <button className="download">Download for Windows</button>
      <style jsx>{`
        .container {
          padding-top: 25px;
          display: flex;
          flex-flow: column;
          align-items: flex-start;
        }
        .top {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
        button {
          height: 40px;
          background: none;
          border: 1px solid ${c.dark};
          cursor: pointer;
        }
        .download {
          width: 230px;
        }
        .download:hover {
          background: ${c.primary};
          color: ${c.light};
        }
        .more {
          background: ${c.dark};
        }
        .arrow-down {
          width: 0; 
          height: 0; 
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid ${c.light};
        }
        @media (min-width: 1024px) {
          .container {
          }
        }
      `}</style>
    </div>
  )
}
