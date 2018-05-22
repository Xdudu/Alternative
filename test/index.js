import React from 'react'
import ReactDOM from 'react-dom'

import Alternative from '../src/index.js'

import styles from './index.css'

const SideA = () => <div styleName="icon-wrapper">
  <svg width="124px" height="47px" viewBox="0 0 124 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-258.000000, -296.000000)" stroke="#60897E" strokeWidth="10">
        <polyline points="262 332.235746 280.752214 313.483533 291.975238 324.706557 312.681795 304 344.634477 335.952682 363.732208 316.854951 377.585938 332.235746"></polyline>
      </g>
    </g>
  </svg>
</div>

const SideB = () => <div styleName="btn-area">
  <div styleName="btn">
    MUSIC
  </div>
</div>


class Test extends React.Component {
  state = {
    clickToTrigger: false
  }

  toggleTriggerType = () => this.setState({ clickToTrigger: !this.state.clickToTrigger })

  render() {
    const { clickToTrigger } = this.state

    return <div styleName="app">
      <div styleName="playground">
        <div styleName="player">
          <header>底部浮现</header>
          <Alternative
            className={styles['alter']}
            clickToTrigger={clickToTrigger}
            sideA={ <SideA /> }
            sideB={ <SideB /> }
          />
        </div>
      </div>

      <div styleName="settings">
        <header>Settings</header>
        <label>
          <input
            type="checkbox"
            checked={clickToTrigger}
            onChange={this.toggleTriggerType}
          />
          click to alter
        </label>
      </div>
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('root'))
