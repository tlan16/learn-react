import React from 'react'

const Reservation = class extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    alert(`A reservation  was requested: ${JSON.stringify(this.state)}`)
    event.preventDefault()
  }

  handleInputChange(event) {
    event.persist()

    const {
      target: {
        name,
        type,
        checked,
        value: targetValue
      }
    } = event

    const value = type === 'checkbox'
      ? checked
      : targetValue

    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    return(
      <form
        onSubmit={this.handleSubmit}
        style={{display:'flex', flexWrap: 'wrap'}}>
        <label style={{flex: '100%'}}>
          Is going:
          <input
            name="isGoing"
            type="checkBox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label style={{flexGrow: 1}}>
          Number of Guest:
          <input
            name="numberOfGuests"
            type="number"
            min={0}
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <span>&nbsp;</span>
        <input type="submit" name="Submit" value="Reserve"/>
      </form>
    )
  }
}

export {
  Reservation,
}
