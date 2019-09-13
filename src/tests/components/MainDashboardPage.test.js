import React from 'react';
import { shallow } from 'enzyme';
import { MainDashboardPage } from '../../components/MainDashboardPage';

test('should render MainDashboardPage correctly', () => {
  const wrapper = shallow(<MainDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
