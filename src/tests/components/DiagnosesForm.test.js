import React from 'react';
import { shallow } from 'enzyme';
import DiagnosesForm from '../../components/DiagnosesForm';
// import profile from '../fixtures/profile';

test('should render DiagnosesForm correctly', () => {
  const wrapper = shallow(<DiagnosesForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should set diagnoses on input change', () => {
  const value = 'New diagnoses';
  const wrapper = shallow(<DiagnosesForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('diagnoses')).toBe(value);
});

test('should set medication on input change', () => {
  const value = 'New medication';
  const wrapper = shallow(<DiagnosesForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('medication')).toBe(value);
});

test('should set time on input change', () => {
  const value = 'New time';
  const wrapper = shallow(<DiagnosesForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('time')).toBe(value);
});
