import React from 'react';
import { shallow } from 'enzyme';
import { DiagnosesDashboardPage } from '../../components/DiagnosesDashboardPage';
import diagnoses from '../fixtures/diagnoses';

test('should render DiagnosesDashboardPage with diagnoses', () => {
  const wrapper = shallow(<DiagnosesDashboardPage diagnoses={diagnoses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render DiagnosesDashboardPage with empty message', () => {
  const wrapper = shallow(<DiagnosesDashboardPage diagnoses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
