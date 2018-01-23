import { connect } from 'react-redux'
import { updateContentValue } from './CodeEditor.state'
import CodeEditor from './CodeEditor.component'

const mapStateToProps = state => {
  return {
    languageSelection: state.languageSelection,
    contentValue: state.contentValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContentUpdate: newContentValue => {
      dispatch(updateContentValue(newContentValue))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor)