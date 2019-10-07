import React from 'react';
import { shallow } from 'enzyme';
import { DrugAllergiesDashboardPage } from '../../components/DrugAllergiesDashboardPage';
import drugAllergy from '../fixtures/drugAllergy';

test('should render DrugAllergiesDashboardPage with drugAllergies', () => {
  const wrapper = shallow(<DrugAllergiesDashboardPage drugAllergy={drugAllergy} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render DrugAllergiesDashboardPage with empty message', () => {
  const wrapper = shallow(<DrugAllergiesDashboardPage drugAllergy={{}} />);
  expect(wrapper).toMatchSnapshot();
});
