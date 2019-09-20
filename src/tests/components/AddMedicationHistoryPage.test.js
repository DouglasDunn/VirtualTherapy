import React from 'react';
import { shallow } from 'enzyme';
import { AddMedicationHistoryPage } from '../../components/AddMedicationHistoryPage';
import medicationHistories from '../fixtures/medicationHistories';

let startAddMedicationHistory, history, wrapper;

beforeEach(() => {
  startAddMedicationHistory = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddMedicationHistoryPage startAddMedicationHistory={startAddMedicationHistory} history={history} />);
});

test('should render AddMedicationHistoryPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('MedicationHistoryForm').prop('onSubmit')(medicationHistories[1]);
  expect(history.push).toHaveBeenLastCalledWith('/medication-history');
  expect(startAddMedicationHistory).toHaveBeenLastCalledWith(medicationHistories[1]);
});
