import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddMedicationHistory,
  addMedicationHistory,
  setMedicationHistories,
  startSetMedicationHistories
} from '../../actions/medicationHistory';
import medicationHistories from '../fixtures/medicationHistories';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const medicationHistoriesData = {};
  medicationHistories.forEach(({ id, medication, dose, purpose, sideEffects, current }) => {
    medicationHistoriesData[id] = { medication, dose, purpose, sideEffects, current };
  });
  database.ref(`users/${uid}/medicationHistories`).set(medicationHistoriesData).then(() => done());
});

test('should setup add medicationHistory action object with provided values', () => {
  const action = addMedicationHistory(medicationHistories[2]);
  expect(action).toEqual({
    type: 'ADD_MEDICATION_HISTORY',
    medicationHistory: medicationHistories[2]
  });
});

test('should add a medicationHistory to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const medicationHistoryData = {
    medication: 'peptobismol',
    dose: '100mg',
    purpose: 'upset stomach',
    sideEffects: 'dry mouth, agitation, tiredness',
    current: 'yes'
  };

  store.dispatch(startAddMedicationHistory(medicationHistoryData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_MEDICATION_HISTORY',
      medicationHistory: {
        id: expect.any(String),
        ...medicationHistoryData
      }
    });

    return database.ref(`users/${uid}/medicationHistories/${actions[0].medicationHistory.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(medicationHistoryData);
    done();
  });
});

test('should add a medicationHistory with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const medicationHistoryDefaults = {
    medication: '',
    dose: '',
    purpose: '',
    sideEffects: '',
    current: ''
  };

  store.dispatch(startAddMedicationHistory({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_MEDICATION_HISTORY',
      medicationHistory: {
        id: expect.any(String),
        ...medicationHistoryDefaults
      }
    });

    return database.ref(`users/${uid}/medicationHistories/${actions[0].medicationHistory.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(medicationHistoryDefaults);
    done();
  });
});

test('should setup set medicationHistory action object with data', () => {
  const action = setMedicationHistories(medicationHistories);
  expect(action).toEqual({
    type: 'SET_MEDICATION_HISTORIES',
    medicationHistories
  });
});

test('should fetch the medicationHistories from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetMedicationHistories()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_MEDICATION_HISTORIES',
      medicationHistories
    });
    done();
  });
});
