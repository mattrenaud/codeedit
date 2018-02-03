const UPDATE_COLLABORATORS = 'UPDATE_COLLABORATORS';

export const updateCollaborators = collaborators => ({
    type: UPDATE_COLLABORATORS,
    collaborators
  })

export function collaborators(state = [], action) {
  switch (action.type) {
    case UPDATE_COLLABORATORS:
      return action.collaborators
    default:
      return state
  }
}

const UPDATE_USERS = 'UPDATE_USERS';

export const updateUsers = users => ({
    type: UPDATE_USERS,
    users
  })

export function users(state = {}, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return action.users
    default:
      return state
  }
}