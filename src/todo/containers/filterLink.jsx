import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link'
import { setVisibility } from '../actions'

class FilterLink extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  }

  static contextTypes = {
    store: PropTypes.object,
  }

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate(),
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.context
    const state = store.getState()
    const { filter, children } = this.props

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        active={
          filter !== state.visibilityFilter
        }
        onClick={() => {
          setVisibility(store, filter)
        }}
      >{children}
      </Link>
    )
  }
}

export default FilterLink
