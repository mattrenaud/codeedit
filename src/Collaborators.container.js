import { connect } from 'react-redux'
import Collaborators from './Collaborators.component'

const mapStateToProps = state => {
  const { users = {}, collaborators = [] } = state

  const names =
    collaborators
      .filter(userId => users[userId] && users[userId].name)
      .map(userId => users[userId].name);

  return {
    names
  }
}


export default connect(
  mapStateToProps
)(Collaborators)