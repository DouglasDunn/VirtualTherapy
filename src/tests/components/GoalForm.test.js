import React from 'react';
import { shallow } from 'enzyme';
import GoalForm from '../../components/GoalForm';
// import profile from '../fixtures/profile';

test('should render GoalForm correctly', () => {
  const wrapper = shallow(<GoalForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should set goal on input change', () => {
  const value = 'New goal';
  const wrapper = shallow(<GoalForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('goal')).toBe(value);
});
