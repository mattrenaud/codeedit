
const UPDATE_CONTENT_VALUE = 'UPDATE_CONTENT_VALUE';

export const updateContentValue = content => {
  return {
    type: UPDATE_CONTENT_VALUE,
    content
  }
}

export function contentValue(state = '', action) {
  switch (action.type) {
    case UPDATE_CONTENT_VALUE:
      return action.content
    default:
      return state
  }
}