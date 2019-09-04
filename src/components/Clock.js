import React from 'react'
import {FormattedDate} from './FormattedDate'

const Clock = class extends React.Component {
  #timerId

  constructor(props) {
    super(props)
    this.state ={date: new Date()}
  }

  componentDidMount() {
    this.#timerId =setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.#timerId)
  }

  tick() {
    this.setState(()=> ({
      date: new Date(),
    }))
  }

  render() {
    const {state: {date}} = this

    return (
      <span>
      It's <FormattedDate date={date}/> now.
      </span>
    )
  }
}

export {
  Clock,
}

export default Clock
