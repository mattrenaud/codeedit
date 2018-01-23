import { contentValue } from './CodeEditor.state';
import { collaborators, users } from './Collaborators.state';
import { languageSelection } from './Language.state';

import { combineReducers } from 'redux'

const rtedit = combineReducers({
  contentValue,
  languageSelection,
  collaborators,
  users
})

export default rtedit