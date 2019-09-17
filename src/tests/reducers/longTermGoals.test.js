import longTermGoalsReducer from '../../reducers/longTermGoals';
import longTermGoals from '../fixtures/longTermGoals';

test('should set default state', () => {
  const state = longTermGoalsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a longTermGoal', () => {
  const longTermGoal = {
    id: '109',
    goal: 'run a 6 minute mile',
    completed: true
  };
  const action = {
    type: 'ADD_LONG_TERM_GOAL',
    longTermGoal
  };
  const state = longTermGoalsReducer(longTermGoals, action);
  expect(state).toEqual([...longTermGoals, longTermGoal]);
});

test('should set longTermGoals', () => {
  const action = {
    type: 'SET_LONG_TERM_GOALS',
    longTermGoals: [longTermGoals[1]]
  };
  const state = longTermGoalsReducer(longTermGoals, action);
  expect(state).toEqual([longTermGoals[1]]);
});
