// Diagnoses Reducer

const diagnosesReducerDefaultState = [];

export default (state = diagnosesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DIAGNOSES':
      return [
        ...action.diagnoses
      ];
    case 'ADD_EMPTY_DIAGNOSES':
      return action.diagnoses;
    case 'ADD_EDIT_MEDICATION':
      return state.map(diagnoses => {
        if (diagnoses.id === action.id) {
          return {
            ...diagnoses,
            ...action.medicationObject
          };
        } else {
          return diagnoses
        }
      });
    case 'SET_DIAGNOSES':
      return action.diagnoses;
    default:
      return state;
  }
};
