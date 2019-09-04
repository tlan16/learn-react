import React from 'react'

const NameForm = class extends React.Component
{
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
        <label>
          Name:
          <input
            type="text"
            name="name"
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
