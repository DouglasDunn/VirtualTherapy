import React from 'react';
import { shallow } from 'enzyme';
import { AddDiagnosesPage } from '../../components/AddDiagnosesPage';
import diagnoses from '../fixtures/diagnoses';

let startAddDiagnoses, history, wrapper;

beforeEach(() => {
  startAddDiagnoses = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddDiagnosesPage startAddDiagnoses={startAddDiagnoses} history={history} />);
});

test('should render AddDiagnosesPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('DiagnosesForm').prop('onSubmit')(diagnoses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/diagnoses');
  expect(startAddDiagnoses).toHaveBeenLastCalledWith(diagnoses[1]);
});
