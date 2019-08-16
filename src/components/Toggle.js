import React from 'react'
import { FormattedDate } from './FormattedDate'

const Toggle = class extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      lastEventTriggeredAt: undefined,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(date){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      lastEventTriggeredAt: date,
    }))
  }

  render() {
    return (
      <span>
        <button onClick={this.handleClick.bind(this, new Date())}>
          {this.state.isToggleOn === true ? 'ON' : 'OFF'}
        </button>
        {
          typeof this.state.lastEventTriggeredAt === 'undefined'
            ? undefined
            : <span style={{float: 'right'}}>(Last event is triggered at <FormattedDate date={this.state.lastEventTriggeredAt}/>)</span>
        }
      </span>
    )
  }
}

export {
  Toggle,
}
