
import { connect } from 'react-redux'
import { setLanguageSelection } from './Language.state'
import Language from './Language.component'

const mapStateToProps = state => {
  return {
    selection: state.languageSelection
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: selection => {
      dispatch(setLanguageSelection(selection))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language)