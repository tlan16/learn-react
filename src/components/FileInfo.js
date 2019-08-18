import React from 'react'

const FileInfo = props => (
  <span style={{display: 'flex', justifyContent: 'space-between'}}>
    <span>
      <span>Name: </span>
      <span>{props.file.name}</span>
    </span>
    <span>
      <span>Size: </span>
      <span>{props.file.size}</span>
      <span>&nbsp;bytes</span>
    </span>
    <span>
      <span>Type: </span>
      <span>{props.file.type}</span>
    </span>
    <span>
      <span>Last modified: </span>
      <span>{(new Date(props.file.lastModified).toLocaleString())}</span>
    </span>
  </span>
)

export {
  FileInfo,
}
