import React from 'react'
import uuidv4 from 'uuid/v4'

const NameForm = class extends React.Component
{
  #inputRefs = {
    name: React.createRef(),
  }

  #inputFieldsId = {
    name: uuidv4(),
  }

  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()
    this.setState(() => ({
      value: event.target.value.toUpperCase(),
    }))
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.#inputFieldsId.name}>
          Name:
          <input
            type="text"
            name="name"
            ref={this.#inputRefs.name}
            id={this.#inputFieldsId.name}
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="Name"
            required={true}
            aria-required="true"
          />
        </label>
        <span>&nbsp;</span>
        <input type="submit" name="Submit" value="Submit"/>
      </form>
    )
  }
}

export {
  NameForm,
}

export default NameForm
