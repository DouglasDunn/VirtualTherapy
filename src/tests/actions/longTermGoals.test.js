import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddLongTermGoal,
  addLongTermGoal,
  setLongTermGoals,
  startSetLongTermGoals
} from '../../actions/longTermGoals';
import longTermGoals from '../fixtures/longTermGoals';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const longTermGoalsData = {};
  longTermGoals.forEach(({ id, goal, completed }) => {
    longTermGoalsData[id] = { goal, completed };
  });
  database.ref(`users/${uid}/longTermGoals`).set(longTermGoalsData).then(() => done());
});

test('should setup add longTermGoal action object with provided values', () => {
  const action = addLongTermGoal(longTermGoals[2]);
  expect(action).toEqual({
    type: 'ADD_LONG_TERM_GOAL',
    longTermGoal: longTermGoals[2]
  });
});

test('should add a longTermGoal to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const longTermGoalData = {
    goal: 'talk in front of a large audience',
    completed: true
  };

  store.dispatch(startAddLongTermGoal(longTermGoalData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_LONG_TERM_GOAL',
      longTermGoal: {
        id: expect.any(String),
        ...longTermGoalData
      }
    });

    return database.ref(`users/${uid}/longTermGoals/${actions[0].longTermGoal.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(longTermGoalData);
    done();
  });
});

test('should add a longTermGoal with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const longTermGoalDefaults = {
    goal: '',
    completed: false
  };

  store.dispatch(startAddLongTermGoal({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_LONG_TERM_GOAL',
      longTermGoal: {
        id: expect.any(String),
        ...longTermGoalDefaults
      }
    });

    return database.ref(`users/${uid}/longTermGoals/${actions[0].longTermGoal.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(longTermGoalDefaults);
    done();
  });
});

test('should setup set longTermGoal action object with data', () => {
  const action = setLongTermGoals(longTermGoals);
  expect(action).toEqual({
    type: 'SET_LONG_TERM_GOALS',
    longTermGoals
  });
});

test('should fetch the longTermGoals from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetLongTermGoals()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_LONG_TERM_GOALS',
      longTermGoals
    });
    done();
  });
});
