import React, { Component } from 'react'
import Markdown from './Markdown'
import AppListNavbar from './AppListNavbar'
import AppItem from './AppItem'
import apps from '../../content/apps.json'

const getTarget = (target, tab) => {
  if (target === 'desktop' && tab === 0) return true
  if (target === 'mobile' && tab === 1) return true
  if (target === 'cli' && tab === 2) return true
  return false
}

export default class AppList extends Component {
  state = {
    tab: 0,
  }

  changeTab = (index) => {
    this.setState({
      tab: index,
    })
  }

  render () {
    const { t } = this.props
    const { tab } = this.state
    return (
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
              if (hasTarget[0]) return <AppItem key={`${i.name}-${hasTarget[0]}`} t={t} {...i} />
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
            padding-bottom: 150px;
          }
          img {
            order: -1;
          }
          .apps {
            padding: 80px 0;
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
            }
            img {
              float: right;
              position: relative;
              top: -100px;
              width: 30%;
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
  }
}
