import React from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick,
}) =>
  <button
    disabled={filter === currentFilter}
    onClick={e => {
      e.preventDefault()
      onClick(filter)
    }}
  >{children}
  </button>

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterLink
