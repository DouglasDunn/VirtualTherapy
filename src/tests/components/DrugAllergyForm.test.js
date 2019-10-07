import React from 'react';
import { shallow } from 'enzyme';
import DrugAllergyForm from '../../components/DrugAllergyForm';
import drugAllergy from '../fixtures/drugAllergy';

test('should render DrugAllergyForm correctly', () => {
  const wrapper = shallow(<DrugAllergyForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render DrugAllergyForm correctly with drugAllergy data', () => {
  const wrapper = shallow(<DrugAllergyForm drugAllergy={drugAllergy} />);
  expect(wrapper).toMatchSnapshot();
});

// figure out how to test yes and no radio buttons inputs

test('should set drugAllergyList on textarea change', () => {
  const value = 'New drugAllergyList value';
  const wrapper = shallow(<DrugAllergyForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('drugAllergyList')).toBe(value);
});
