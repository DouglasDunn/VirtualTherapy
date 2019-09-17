import React from 'react';
import { shallow } from 'enzyme';
import dailyGoals from '../fixtures/dailyGoals';
import DailyGoalListItem from '../../components/DailyGoalListItem';

test('should render DailyGoalListItem correctly', () => {
  const wrapper = shallow(<DailyGoalListItem {...dailyGoals[0]} />);
  expect(wrapper).toMatchSnapshot();
});
