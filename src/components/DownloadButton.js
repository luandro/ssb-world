import React from 'react'
import c from '../utils/colors'

export default function AppItem ({ t, sources }) {
  return (
    <div className="wrapper">
      <div className="container">
        <button>Download</button>
      </div>
      <style jsx>{`
        .wrapper {
        }
        .container {
          border: 1px solid ${c.complementary};
        }
        @media (min-width: 1024px) {
          .container {
          }
        }
      `}</style>
    </div>
  )
}
