import React from 'react'
import ReactMarkdown from 'react-markdown'
import c from '../utils/colors'

export default function Markdown ({ t, input, align, largeWidth, width, margin }) {
  return (
    <div className="container">
        <ReactMarkdown
          source={input}
          className="markdown"
        />
      <style jsx>{`
        .container {
          width: ${width ? width : '100%'};
          text-align: ${align ? align : 'left'};
          margin: ${margin ? margin : 'inherit'};
        }
        @media (min-width: 1024px) {
          .container {
            width: ${largeWidth ? largeWidth : '940px'};
          }
        }
      `}</style>
    </div>
  )
}
