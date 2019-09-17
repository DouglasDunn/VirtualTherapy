import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddDailyGoal,
  addDailyGoal,
  setDailyGoals,
  startSetDailyGoals
} from '../../actions/dailyGoals';
import dailyGoals from '../fixtures/dailyGoals';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const dailyGoalsData = {};
  dailyGoals.forEach(({ id, goal, completed }) => {
    dailyGoalsData[id] = { goal, completed };
  });
  database.ref(`users/${uid}/dailyGoals`).set(dailyGoalsData).then(() => done());
});

test('should setup add dailyGoal action object with provided values', () => {
  const action = addDailyGoal(dailyGoals[2]);
  expect(action).toEqual({
    type: 'ADD_DAILY_GOAL',
    dailyGoal: dailyGoals[2]
  });
});

test('should add a dailyGoal to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const dailyGoalData = {
    goal: 'get 10 minutes of sun',
    completed: true
  };

  store.dispatch(startAddDailyGoal(dailyGoalData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DAILY_GOAL',
      dailyGoal: {
        id: expect.any(String),
        ...dailyGoalData
      }
    });

    return database.ref(`users/${uid}/dailyGoals/${actions[0].dailyGoal.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(dailyGoalData);
    done();
  });
});

test('should add a dailyGoal with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const dailyGoalDefaults = {
    goal: '',
    completed: false
  };

  store.dispatch(startAddDailyGoal({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_DAILY_GOAL',
      dailyGoal: {
        id: expect.any(String),
        ...dailyGoalDefaults
      }
    });

    return database.ref(`users/${uid}/dailyGoals/${actions[0].dailyGoal.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(dailyGoalDefaults);
    done();
  });
});

test('should setup set dailyGoal action object with data', () => {
  const action = setDailyGoals(dailyGoals);
  expect(action).toEqual({
    type: 'SET_DAILY_GOALS',
    dailyGoals
  });
});

test('should fetch the dailyGoals from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetDailyGoals()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_DAILY_GOALS',
      dailyGoals
    });
    done();
  });
});
