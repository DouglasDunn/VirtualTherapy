import React from 'react';
import { shallow } from 'enzyme';
import ProfileForm from '../../components/ProfileForm';
import profile from '../fixtures/profile';

test('should render ProfileForm correctly', () => {
  const wrapper = shallow(<ProfileForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should set firstName on input change', () => {
  const value = 'New first name';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('firstName')).toBe(value);
});

test('should set lastName on input change', () => {
  const value = 'New last name';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('lastName')).toBe(value);
});

test('should set emailAddress on input change', () => {
  const value = 'New email address';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('emailAddress')).toBe(value);
});

test('should set dateOfBirth on input change', () => {
  const value = 'New date of birth';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(3).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('dateOfBirth')).toBe(value);
});

// figure out how to test male, female, and other radio buttons inputs

test('should set emergencyContactName on input change', () => {
  const value = 'New emergencyContactName';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(7).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('emergencyContactName')).toBe(value);
});

test('should set emergencyContactNumber on input change', () => {
  const value = 'New emergencyContactNumber';
  const wrapper = shallow(<ProfileForm />);
  wrapper.find('input').at(8).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('emergencyContactNumber')).toBe(value);
});
