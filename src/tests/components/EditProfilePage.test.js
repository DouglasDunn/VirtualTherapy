import React from 'react';
import { shallow } from 'enzyme';
import profile from '../fixtures/profile';
import { EditProfilePage } from '../../components/EditProfilePage';

let startEditProfile, history, wrapper;

beforeEach(() => {
  startEditProfile = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditProfilePage
      startEditProfile={startEditProfile}
      history={history}
      profile={profile}
    />
  );
});

test('should render EditProfilePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditProfile', () => {
  wrapper.find('ProfileForm').prop('onSubmit')(profile);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditProfile).toHaveBeenLastCalledWith(profile);
});
