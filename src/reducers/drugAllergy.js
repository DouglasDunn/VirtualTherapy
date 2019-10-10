// DrugAllergy Reducer

const drugAllergyReducerDefaultState = [];

export default (state = drugAllergyReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DRUG_ALLERGY':
      return [
        ...state,
        ...action.drugAllergy
      ];
    // case 'EDIT_PROFILE':
    //   return {
    //     ...state,
    //     ...action.updates
    //   };
    case 'SET_DRUG_ALLERGY':
      return action.drugAllergy;
    default:
      return state;
  }
};

// case 'ADD_DRUG_ALLERGY':
//   return {
//     ...action.drugAllergy
//   };
