import React from 'react'
import c from '../utils/colors'

export default function Footer ({ t }) {
  return (
    <div className="wrapper">
      <div className="container">
        <p>Created and maintained with ❤️ by the <a href="">SSB community</a></p>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 1px 0;
          background: ${c.primary};
        }
        .container {
          color: ${c.light};
          width: 90%;
          margin: 0 auto;
          text-align: center;
        }
        a {
          color: ${c.light};
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
