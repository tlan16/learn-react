import React from 'react'

const FlavorsForm = class extends React.Component
{
  #placeholder = ['lime']

  constructor(props) {
    super(props)
    this.state = {value: this.#placeholder}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()

    this.setState(() => ({
      value: FlavorsForm.getValueFromSelectOnChangeEvent(event)
    }))
  }

  static getValueFromSelectOnChangeEvent(event) {
    const reducer = (value, option) => {
      if (option.selected) {
        value.push(option.value)
      }

      return value
    }

    return Object.values(event.target.options).reduce(
      reducer,
      []
    )
  }

  handleSubmit(event) {
    alert(`A flavor was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display:'flex'}}>
        <label style={{flexGrow: 1, display: 'flex'}}>
          Flavors:
          <select
            multiple={true}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <span>&nbsp;</span>
        <input type="submit" name="Submit" value="Submit"/>
      </form>
    )
  }
}

export {
  FlavorsForm,
}

export default FlavorsForm
