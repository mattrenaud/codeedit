
import { connect } from 'react-redux'
import { setLanguageSelection } from './Language.state'
import Language from './Language.component'

const mapStateToProps = state => ({
    selection: state.languageSelection
  })

const mapDispatchToProps = dispatch => ({
    onSelect: selection => {
      dispatch(setLanguageSelection(selection))
    }
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language)