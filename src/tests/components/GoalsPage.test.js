import React from 'react';
import { shallow } from 'enzyme';
import { GoalsPage } from '../../components/GoalsPage';
import dailyGoals from '../fixtures/dailyGoals';
import longTermGoals from '../fixtures/longTermGoals';

let startAddDailyGoal, startAddLongTermGoal;

beforeEach(() => {
  startAddDailyGoal = jest.fn();
  startAddLongTermGoal = jest.fn();
});

test('should render GoalsPage with dailyGoals and longTermGoals', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={dailyGoals} longTermGoals={longTermGoals} startAddDailyGoal={startAddDailyGoal} startAddLongTermGoal={startAddLongTermGoal} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render GoalsPage with empty messages', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={[]} longTermGoals={[]} startAddDailyGoal={startAddDailyGoal} startAddLongTermGoal={startAddLongTermGoal} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmitDailyGoal', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={dailyGoals} longTermGoals={longTermGoals} startAddDailyGoal={startAddDailyGoal} startAddLongTermGoal={startAddLongTermGoal} />);
  wrapper.find('GoalForm').at(0).prop('onSubmit')(dailyGoals[1]);
  expect(startAddDailyGoal).toHaveBeenLastCalledWith(dailyGoals[1]);
});

test('should handle onSubmitLongTermGoal', () => {
  const wrapper = shallow(<GoalsPage dailyGoals={dailyGoals} longTermGoals={longTermGoals} startAddDailyGoal={startAddDailyGoal} startAddLongTermGoal={startAddLongTermGoal} />);
  wrapper.find('GoalForm').at(1).prop('onSubmit')(longTermGoals[1]);
  expect(startAddLongTermGoal).toHaveBeenLastCalledWith(longTermGoals[1]);
});
