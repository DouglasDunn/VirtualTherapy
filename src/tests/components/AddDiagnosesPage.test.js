import React from 'react';
import { shallow } from 'enzyme';
import { AddDiagnosesPage } from '../../components/AddDiagnosesPage';
// import profile from '../fixtures/profile';

// let startCreateProfile, history, wrapper;
let wrapper;

// beforeEach(() => {
//   startCreateProfile = jest.fn();
//   history = { push: jest.fn() };
//   wrapper = shallow(<CreateProfilePage startCreateProfile={startCreateProfile} history={history} />);
// });

beforeEach(() => {
  wrapper = shallow(<AddDiagnosesPage />);
});

test('should render AddDiagnosesPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle onSubmit', () => {
//   wrapper.find('ProfileForm').prop('onSubmit')(profile);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startCreateProfile).toHaveBeenLastCalledWith(profile);
// });
