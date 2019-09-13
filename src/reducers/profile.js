// Profiles Reducer

const profileReducerDefaultState = {};

export default (state = profileReducerDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return {
        ...action.profile
      };
    case 'SET_PROFILE':
      return action.profile;
    default:
      return state;
  }
};
