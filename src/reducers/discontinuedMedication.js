// DiscontinuedMedication Reducer

const discontinuedMedicationReducerDefaultState = [];

export default (state = discontinuedMedicationReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DISCONTINUED_MEDICATION':
      return [
        ...action.discontinuedMedication
      ];
    default:
      return state;
  }
};
