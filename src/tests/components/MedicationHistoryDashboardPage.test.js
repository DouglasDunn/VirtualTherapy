import React from 'react';
import { shallow } from 'enzyme';
import { MedicationHistoryDashboardPage } from '../../components/MedicationHistoryDashboardPage';
import medicationHistories from '../fixtures/medicationHistories';

test('should render MedicationHistoryDashboardPage with medicationHistories', () => {
  const wrapper = shallow(<MedicationHistoryDashboardPage medicationHistories={medicationHistories} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MedicationHistoryDashboardPage with empty message', () => {
  const wrapper = shallow(<MedicationHistoryDashboardPage medicationHistories={[]} />);
  expect(wrapper).toMatchSnapshot();
});
