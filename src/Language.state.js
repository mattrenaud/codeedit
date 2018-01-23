
const SET_LANGUAGE_SELECTION = 'SET_LANGUAGE_SELECTION';

export const setLanguageSelection = selection => {
  return {
    type: SET_LANGUAGE_SELECTION,
    selection
  }
}

export function languageSelection(state = 'javascript', action) {
  switch (action.type) {
    case SET_LANGUAGE_SELECTION:
      return action.selection
    default:
      return state
  }
}
