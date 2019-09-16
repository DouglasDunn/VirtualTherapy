import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddDiagnoses,
  addDiagnoses,
  setDiagnoses,
  startSetDiagnoses
} from '../../actions/diagnoses';
import diagnoses from '../fixtures/diagnoses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const diagnosesData = {};
  diagnoses.forEach(({ id, diagnoses, medication, time }) => {
    diagnosesData[id] = { diagnoses, medication, time };
  });
  database.ref(`users/${uid}/diagnoses`).set(diagnosesData).then(() => done());
});

test('should setup add diagnoses action object with provided values', () => {
  const action = addDiagnoses(diagnoses[2]);
  expect(action).toEqual({
    type: 'ADD_DIAGNOSES',
    diagnoses: diagnoses[2]
  });
});

test('should add a diagnoses to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const diagnosesData = {
    diagnoses: 'tics',
    medication: 'advil',
    time: '8:30am'
  };

  store.dispatch(startAddDiagnoses(diagnosesData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DIAGNOSES',
      diagnoses: {
        id: expect.any(String),
        ...diagnosesData
      }
    });

    return database.ref(`users/${uid}/diagnoses/${actions[0].diagnoses.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(diagnosesData);
    done();
  });
});

test('should add a diagnoses with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const diagnosesDefaults = {
    diagnoses: '',
    medication: '',
    time: ''
  };

  store.dispatch(startAddDiagnoses({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DIAGNOSES',
      diagnoses: {
        id: expect.any(String),
        ...diagnosesDefaults
      }
    });

    return database.ref(`users/${uid}/diagnoses/${actions[0].diagnoses.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(diagnosesDefaults);
    done();
  });
});

test('should setup set diagnoses action object with data', () => {
  const action = setDiagnoses(diagnoses);
  expect(action).toEqual({
    type: 'SET_DIAGNOSES',
    diagnoses
  });
});

test('should fetch the diagnoses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetDiagnoses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_DIAGNOSES',
      diagnoses
    });
    done();
  });
});
