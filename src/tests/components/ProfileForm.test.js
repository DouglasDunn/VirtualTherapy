import React from 'react';
import { shallow } from 'enzyme';
import ProfileForm from '../../components/ProfileForm';
import profile from '../fixtures/profile';

test('should render ProfileForm correctly', () => {
  const wrapper = shallow(<ProfileForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should set name on input change', () => {
  const value = 'New name';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('name')).toBe(value);
});

test('should set age on input change', () => {
  const value = 'New age';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('age')).toBe(value);
});

test('should set emergencyContactName on input change', () => {
  const value = 'New emergencyContactName';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('emergencyContactName')).toBe(value);
});

test('should set emergencyContactNumber on input change', () => {
  const value = 'New emergencyContactNumber';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(3).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('emergencyContactNumber')).toBe(value);
});
