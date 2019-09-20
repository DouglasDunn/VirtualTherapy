import React from 'react';
import { shallow } from 'enzyme';
import medicationHistories from '../fixtures/medicationHistories';
import MedicationHistoryListItem from '../../components/MedicationHistoryListItem';

test('should render MedicationHistoryListItem correctly', () => {
  const wrapper = shallow(<MedicationHistoryListItem {...medicationHistories[0]} />);
  expect(wrapper).toMatchSnapshot();
});
