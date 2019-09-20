// MedicationHistory Reducer

const medicationHistoriesReducerDefaultState = [];

export default (state = medicationHistoriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MEDICATION_HISTORY':
      return [
        ...state,
        action.medicationHistory
      ];
    case 'SET_MEDICATION_HISTORIES':
      return action.medicationHistories;
    default:
      return state;
  }
};
