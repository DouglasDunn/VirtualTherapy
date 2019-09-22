// Profiles Reducer

const profileReducerDefaultState = {};

export default (state = profileReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return {
        ...action.profile
      };
    case 'EDIT_PROFILE':
      return {
        ...state,
        ...action.updates
      };
    case 'SET_PROFILE':
      return action.profile;
    default:
      return state;
  }
};
