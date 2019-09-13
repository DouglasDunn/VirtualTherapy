import React from 'react';
import { shallow } from 'enzyme';
import { DiagnosesDashboardPage } from '../../components/DiagnosesDashboardPage';

test('should render DiagnosesDashboardPage correctly', () => {
  const wrapper = shallow(<DiagnosesDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
