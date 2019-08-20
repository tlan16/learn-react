const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9

const toFahrenheit = celsius => (celsius * 9 / 5) + 32

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature)

  if (Number.isNaN(input)) {
    return ''
  }

  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000

  return rounded.toString()
}

export {
  toCelsius,
  toFahrenheit,
  tryConvert,
}
