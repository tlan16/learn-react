import { connect } from 'react-redux'
import Link from '../components/link'
import { setVisibility } from '../actions'

const mapStateToProps = (state, props) => ({
  active: props.filter !== state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    setVisibility(dispatch, props.filter)
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)