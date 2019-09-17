import React from 'react';
import { shallow } from 'enzyme';
import { GoalsPage } from '../../components/GoalsPage';
import dailyGoals from '../fixtures/dailyGoals';

let startAddDailyGoal;

beforeEach(() => {
  startAddDailyGoal = jest.fn();
});

test('should render GoalsPage with dailyGoals', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={dailyGoals} startAddDailyGoal={startAddDailyGoal} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render GoalsPage with empty message', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={[]} startAddDailyGoal={startAddDailyGoal} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={dailyGoals} startAddDailyGoal={startAddDailyGoal} />);
  wrapper.find('GoalForm').prop('onSubmit')(dailyGoals[1]);
  expect(startAddDailyGoal).toHaveBeenLastCalledWith(dailyGoals[1]);
});
