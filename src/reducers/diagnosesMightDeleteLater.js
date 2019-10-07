// Diagnoses Reducer

const diagnosesReducerDefaultState = [];

export default (state = diagnosesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DIAGNOSES':
      return [
        ...state,
        action.diagnoses
      ];
    case 'SET_DIAGNOSES':
      return action.diagnoses;
    default:
      return state;
  }
};
