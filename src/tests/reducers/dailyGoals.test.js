import dailyGoalsReducer from '../../reducers/dailyGoals';
import dailyGoals from '../fixtures/dailyGoals';

test('should set default state', () => {
  const state = dailyGoalsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a dailyGoal', () => {
  const dailyGoal = {
    id: '109',
    goal: 'run a mile',
    completed: true
  };
  const action = {
    type: 'ADD_DAILY_GOAL',
    dailyGoal
  };
  const state = dailyGoalsReducer(dailyGoals, action);
  expect(state).toEqual([...dailyGoals, dailyGoal]);
});

test('should set dailyGoals', () => {
  const action = {
    type: 'SET_DAILY_GOALS',
    dailyGoals: [dailyGoals[1]]
  };
  const state = dailyGoalsReducer(dailyGoals, action);
  expect(state).toEqual([dailyGoals[1]]);
});
