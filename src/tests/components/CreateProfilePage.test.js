import React from 'react';
import { shallow } from 'enzyme';
import { CreateProfilePage } from '../../components/CreateProfilePage';
import profile from '../fixtures/profile';

let startCreateProfile, history, wrapper;

beforeEach(() => {
  startCreateProfile = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreateProfilePage startCreateProfile={startCreateProfile} history={history} />);
});

test('should render CreateProfilePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ProfileForm').prop('onSubmit')(profile);
  expect(history.push).toHaveBeenLastCalledWith('/add-drug-allergies');
  expect(startCreateProfile).toHaveBeenLastCalledWith(profile);
});
