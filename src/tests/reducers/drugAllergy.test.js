import drugAllergyReducer from '../../reducers/drugAllergy';
import drugAllergy from '../fixtures/drugAllergy';

test('should set default state', () => {
  const state = drugAllergyReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should add a drugAllergy', () => {
  const drugAllergy = {
    allergicToDrugs: 'yes',
    drugAllergyList: 'Zoloft'
  };
  const action = {
    type: 'ADD_DRUG_ALLERGY',
    drugAllergy
  };
  const state = drugAllergyReducer({}, action);
  expect(state).toEqual(drugAllergy);
});

// test('should edit a profile', () => {
//   const firstName = 'Jonathan';
//   const action = {
//     type: 'EDIT_PROFILE',
//     updates: {
//       firstName
//     }
//   };
//   const state = profileReducer(profile, action);
//   expect(state.firstName).toBe(firstName);
// });

test('should set drugAllergy', () => {
  const action = {
    type: 'SET_DRUG_ALLERGY',
    drugAllergy
  };
  const state = drugAllergyReducer({}, action);
  expect(state).toEqual(drugAllergy);
});
