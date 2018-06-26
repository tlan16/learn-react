import React from 'react'
import PropTypes from 'prop-types'

const Link = ({
  active,
  children,
  onClick,
}) =>
  <button
    disabled={!active}
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
  >{children}
  </button>

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
