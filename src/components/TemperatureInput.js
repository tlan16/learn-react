import React from 'react'

const TemperatureInput = class extends React.Component
{
  #scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }

  constructor(props) {
    super(props)

    this.state = {temperature: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.persist()

    this.props.onTemperatureChange(event.target.value)
  }

  render(){
    const {scale, temperature} = this.props

    return (
      <fieldset>
        <legend>Enter temperature in {this.#scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

export {
  TemperatureInput,
}
