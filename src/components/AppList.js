import React, { Component } from 'react'
import Markdown from './Markdown'
import AppListNavbar from './AppListNavbar'
import AppItem from './AppItem'
import apps from '../../content/apps.json'
import detectOs from '@bit/tomlandau.simple-js.platform-detection.detect-os'

const getTarget = (target, tab) => {
  if (target === 'desktop' && tab === 0) return true
  if (target === 'mobile' && tab === 1) return true
  if (target === 'cli' && tab === 2) return true
  return false
}

export default class AppList extends Component {
  state = {
    tab: 0,
    os: null,
  }

  componentDidMount () {
    const os = detectOs.get()
    console.log('OS', os)
    const currentTab = () => {
      switch(os) {
        case 'Mac':
          return 0
        case 'Windows':
          return 0
        case 'Linux':
          return 0
        case 'iOS':
          return 1
        case 'Android':
          return 1
        default:
          return 0
      }
    }
    this.setState({
      os: os,
      tab: currentTab(),
    })
  }

  changeTab = (index) => {
    this.setState({
      tab: index,
    })
  }

  render () {
    const { t } = this.props
    const { tab, os } = this.state
    if (os) return (
      <div className="wrapper">
        <div className="container">
          <div className="titleContainer">
            <Markdown
              t={t}
              input={`## ENTER THE SCUTTLEVERSE`}
              align="center"
              largeWidth="250px"
              margin="0 auto"
            />
            <img src="/static/ssb_diving_b.png" />
          </div>
          <AppListNavbar t={t} onClick={this.changeTab} tab={tab} />
          <div className="apps">
            {apps.map(i => {
              const hasTarget = i.targets.filter(tg => getTarget(tg, tab))
              if (hasTarget[0]) return <AppItem
                key={`${i.name}-${hasTarget[0]}`}
                t={t} {...i}
                os={os}
              />
            })}
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            width: 100%;
            padding-top: 180px;
            text-align: center;
          }
          .container {
            width: 90%;
            margin: 0 auto;
          }
          .titleContainer {
            display: flex;
            flex-flow: column;
            align-items: center;
            padding-bottom: 80px;
          }
          img {
            order: -1;
            max-width: 100%;
          }
          .apps {
            padding: 35px 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
          }
          @media screen and (min-width: 1024px) {
            .container {
              width: 940px;
            }
            .titleContainer {
              display: inherit;
              padding-bottom: 150px;
            }
            img {
              float: right;
              position: relative;
              top: -100px;
              width: 30%;
            }
            .apps {
              padding: 80px 0;
            }
          }
          @media screen and (min-width: 1280px) {
            img {
             width: auto;
            }
          }
        `}</style>
      </div>
    )
    else return null
  }
}
