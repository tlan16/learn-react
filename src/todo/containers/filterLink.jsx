/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import Link from '../components/link'
import { setVisibility } from '../actions/index'

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {
      filter,
      children,
    } = this.props
    const state = store.getState()

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        active={
          filter !== state.visibilityFilter
        }
        onClick={() => {
          setVisibility(filter)
        }}
      >{children}
      </Link>
    )
  }
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default FilterLink
