import React from 'react'

const EssayForm = class extends React.Component
{
  #placeholder = 'Please write an essay about your favorite DOM element.'

  constructor(props) {
    super(props)
    this.state = {value: this.#placeholder}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()
    this.setState(() => ({
      value: event.target.value,
    }))
  }

  handleSubmit(event) {
    alert(`A essay was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display:'flex'}}>
        <label style={{flexGrow: 1, display: 'flex'}}>
          Essay:
          <textarea
            style={{flexGrow: 1}}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <span>&nbsp;</span>
        <input type="submit" name="Submit" value="Submit"/>
      </form>
    )
  }
}

export {
  EssayForm,
}
