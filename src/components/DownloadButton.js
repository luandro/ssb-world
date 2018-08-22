import React, { Component } from 'react'
import c from '../utils/colors'

const DownloadItem = ({ src, os }) =>  <form method="get" action={src}>
  <button className="download" type="submit">Download for {os}</button>
  <style jsx>{`
     button {
      height: 40px;
      background: ${c.light};
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
  `}</style>
</form>

export default class DownloadButton extends Component {
  state = {
    hovered: false
  }
  
  toggleMenu = () => this.setState({ hovered: !this.state.hovered})

  render () {
    const { t, os, downloads, install } = this.props
    const { hovered } = this.state
    if (downloads && downloads.length > 0) {
      let top = downloads.findIndex(i => i.os === os)
      if (top === -1) top = 0
      return (
        <div className="container">
          <div className="top">
            <DownloadItem
              top
              src={downloads[top].src}
              os={downloads[top].os}
            />
            {(downloads.length > 1) &&  <button
              onClick={this.toggleMenu}
              // onMouseEnter={this.toggleMenu}
              // onMouseLeave={this.toggleMenu}
              className="more"
            >
              <div className="arrow-down" />
            </button>}
          </div>
          <div className={hovered ? 'menu' : 'menu hidden'}>
            {downloads.map((i, index) => {
              if (index !== top) return <DownloadItem key={index} src={i.src} os={i.os} />
            })}
          </div>
          <style jsx>{`
            .container {
              position: relative;
              padding-top: 25px;
              display: flex;
              flex-flow: column;
            }
            .top {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              align-content: center;
              justify-content: center;
            }
            .more {
              height: 40px;
              border: 1px solid ${c.dark};
              cursor: pointer;
              background: ${c.dark};
            }
            .menu {
              position: absolute;
              // margin-top: 40px;
              // margin-left: 55px;
              top: 65px;
              right: 15px;
              width:100%;
            }
            .arrow-down {
              width: 0; 
              height: 0; 
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-top: 7px solid ${c.light};
            }
            .hidden {
              display: none;
            }
            @media (min-width: 1024px) {
              .container {
              }
            }
          `}</style>
        </div>
      )
    } else if (install) {
      return (
        <div className="container">
          <code>{install}</code>
          <style jsx>{`
            .container {
              padding-top: 25px;
            }
            code {
              background: ${c.dark};
              color: ${c.light};
              padding: 10px 8px;
            }
          `}</style>
        </div>
      )
    }
  }
}
