/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import Link from './link'
import { SET_VISIBILITY_FILTER } from '../actions'

const setVisibility = filter => {
  store.dispatch({
    type: SET_VISIBILITY_FILTER,
    filter,
  })
}

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
