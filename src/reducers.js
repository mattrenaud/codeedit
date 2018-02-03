import { contentValue } from './CodeEditor.state';
import { collaborators, users } from './Collaborators.state';
import { languageSelection } from './Language.state';

import { combineReducers } from 'redux';

export default combineReducers({
  contentValue,
  languageSelection,
  collaborators,
  users
});
