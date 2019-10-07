import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddDrugAllergy,
  addDrugAllergy,
  // editProfile,
  // startEditProfile,
  setDrugAllergy,
  startSetDrugAllergy
} from '../../actions/drugAllergy';
import drugAllergy from '../fixtures/drugAllergy';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  database.ref(`users/${uid}/drugAllergy`).set(drugAllergy).then(() => done());
});

// test('should setup edit profile action object', () => {
//   const action = editProfile({ emergencyContactName: 'Gordon' });
//   expect(action).toEqual({
//     type: 'EDIT_PROFILE',
//     updates: {
//       emergencyContactName: 'Gordon'
//     }
//   });
// });
//
// test('should edit profile from firebase', (done) => {
//   const store = createMockStore(defaultAuthState);
//   const updates = { lastName: 'Garcia' };
//   store.dispatch(startEditProfile(updates)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'EDIT_PROFILE',
//       updates
//     });
//     return database.ref(`users/${uid}/profile`).once('value');
//   }).then((snapshot) => {
//     expect(snapshot.val().lastName).toBe(updates.lastName);
//     done();
//   });
// });

test('should setup add drugAllergy action object with provided values', () => {
  const action = addDrugAllergy(drugAllergy);
  expect(action).toEqual({
    type: 'ADD_DRUG_ALLERGY',
    drugAllergy
  });
});

test('should add a profile to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const drugAllergyData = {
    allergicToDrugs: 'yes',
    drugAllergyList: 'Advil'
  };

  store.dispatch(startAddDrugAllergy(drugAllergyData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DRUG_ALLERGY',
      drugAllergy: drugAllergyData
    });

    return database.ref(`users/${uid}/drugAllergy`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(drugAllergyData);
    done();
  });
});

test('should add drugAllergy with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const drugAllergyDefaults = {
    allergicToDrugs: '',
    drugAllergyList: ''
  };

  store.dispatch(startAddDrugAllergy({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DRUG_ALLERGY',
      drugAllergy: drugAllergyDefaults
    });

    return database.ref(`users/${uid}/drugAllergy`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(drugAllergyDefaults);
    done();
  });
});

test('should setup set drugAllergy action object with data', () => {
  const action = setDrugAllergy(drugAllergy);
  expect(action).toEqual({
    type: 'SET_DRUG_ALLERGY',
    drugAllergy
  });
});

test('should fetch the drugAllergy from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetDrugAllergy()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_DRUG_ALLERGY',
      drugAllergy
    });
    done();
  });
});
