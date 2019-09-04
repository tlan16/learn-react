import React from 'react'
import { BoilingVerdict } from './BoilingVerdict'
import { TemperatureInput } from './TemperatureInput'
import { toCelsius, toFahrenheit, tryConvert } from './TemperatureConvertor'

const Calculator = class extends React.Component
{
  constructor(props) {
    super(props)

    this.state = {temperature: '', scale: 'c'}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  /**
   * @param {string} temperature
   * @returns {boolean}
   */
  static validateTemperatureInput(temperature) {
    if (temperature === '' || temperature === '-') {
      return true
    }

    return !isNaN(parseFloat(temperature))
  }

  handleCelsiusChange(temperature) {
    if (!Calculator.validateTemperatureInput(temperature)) {
      return
    }

    this.setState(()=> ({
      scale: 'c',
      temperature,
    }))
  }

  handleFahrenheitChange(temperature) {
    if (!Calculator.validateTemperatureInput(temperature)) {
      return
    }

    this.setState(()=> ({
      scale: 'f',
      temperature,
    }))
  }

  get temperatureCelsius() {
    const {scale, temperature} = this.state

    return scale === 'c'
      ? temperature
      : tryConvert(temperature, toCelsius)
  }

  get temperatureFahrenheit() {
    const {scale, temperature} = this.state

    return scale === 'f'
      ? temperature
      : tryConvert(temperature, toFahrenheit)
  }

  render() {
    return (
      <span>
        <TemperatureInput scale="c" temperature={this.temperatureCelsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={this.temperatureFahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>

        <BoilingVerdict celsius={this.temperatureCelsius}/>
      </span>
    )
  }
}

export {
  Calculator,
}

export default Calculator
