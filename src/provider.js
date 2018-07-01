import { Component } from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
}


export default Provider
