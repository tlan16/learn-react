import React from 'react'
import { FileInfo } from './FileInfo'

const FileForm = class extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {value: undefined}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()
    this.setState(() => ({
      value: event.target.files[0],
    }))
  }

  handleSubmit(event) {
    alert(`A file was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          File:
          <input
            type="file"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        {
          this.state.value &&
          <span>
            <FileInfo file={this.state.value}/>
            <input type="submit" name="Submit" value="Upload"/>
          </span>
        }
      </form>
    )
  }
}

export {
  FileForm,
}
