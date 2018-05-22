import React from 'react'

import { combineClassNames } from './utils'

import styles from './index.css'


export default class Alternative extends React.PureComponent {
  state = {
    onSideA: true
  }

  alter = () => this.setState({ onSideA: !this.state.onSideA })

  alterNil = () => null

  render() {
    const { sideA, sideB, clickToTrigger, className } = this.props
    const { onSideA } = this.state

    const hoverTriggerHandler = clickToTrigger ? this.alterNil : this.alter
    const clickTriggerHandler = clickToTrigger ? this.alter : this.alterNil

    return <div
      className={
        combineClassNames([
          styles.wrapper,
          styles[onSideA ? 'side-a' : 'side-b'],
          className
        ])
      }
      onMouseEnter={hoverTriggerHandler}
      onMouseLeave={hoverTriggerHandler}
      onMouseDown={clickTriggerHandler}>
      <div styleName="a-wrapper">
        { sideA }
      </div>
      <div styleName="b-wrapper">
        { sideB }
      </div>
    </div>
  }
}
