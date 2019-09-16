import React from 'react';
import { shallow } from 'enzyme';
import diagnoses from '../fixtures/diagnoses';
import DiagnosesListItem from '../../components/DiagnosesListItem';

test('should render DiagnosesListItem correctly', () => {
  const wrapper = shallow(<DiagnosesListItem {...diagnoses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
