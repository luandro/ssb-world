import React from 'react'
import c from '../utils/colors'
import TabIcons from './TabIcons'
const tabs = [
  {
    img: 'desktop',
    name: 'Desktop',
  },
  {
    img: 'mobile',
    name: 'Mobile',
  },
  {
    img: 'cli',
    name: 'Command Line',
  },
]

export default function App ({ t, onClick, tab }) {
  return (
    <div className="wrapper">
      <div className="container">
        {tabs.map((item, index) => (
          <div key={index} className="navItem" onClick={() => onClick(index)}>
            <TabIcons fill={(tab === index) ? c.primary : null} img={item.img} />
            <a className={(tab === index) ? 'selected' : null}>{item.name}</a>
          </div>
        ))}
      </div>
      <hr />
      <style jsx>{`
        .wrapper {
          width: 100%;
        }
        .container {
          width: 90%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: space-around;
        }
        .navItem {
          display: flex;
          flex-flow: column;
          align-items: center;
          cursor: pointer;
        }
        a {
          font-size: 1.2em;
          padding-top: 15px;
        }
        svg > * {
          fill: red;
        }
        .svg {
          fill: red;
        }
        .selected {
          color: ${c.primary};
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
