import React from 'react';
import { shallow } from 'enzyme';
import { AddDrugAllergiesPage } from '../../components/AddDrugAllergiesPage';
import drugAllergy from '../fixtures/drugAllergy';

let startAddDrugAllergy, history, wrapper;

beforeEach(() => {
  startAddDrugAllergy = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddDrugAllergiesPage startAddDrugAllergy={startAddDrugAllergy} history={history} />);
});

test('should render AddDrugAllergiesPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('DrugAllergyForm').prop('onSubmit')(drugAllergy);
  expect(history.push).toHaveBeenLastCalledWith('/drug-allergies');
  expect(startAddDrugAllergy).toHaveBeenLastCalledWith(drugAllergy);
});
