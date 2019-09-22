import profileReducer from '../../reducers/profile';
import profile from '../fixtures/profile';

test('should set default state', () => {
  const state = profileReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should create a profile', () => {
  const profile = {
    firstName: 'Tyler',
    lastName: 'Louie',
    emailAddress: 'tyler@gmail.com',
    dateOfBirth: '04/22/93',
    gender: 'male',
    emergencyContactName: 'Aaron Banlao',
    emergencyContactNumber: '(408) 476-2398'
  };
  const action = {
    type: 'CREATE_PROFILE',
    profile
  };
  const state = profileReducer({}, action);
  expect(state).toEqual(profile);
});

test('should edit a profile', () => {
  const firstName = 'Jonathan';
  const action = {
    type: 'EDIT_PROFILE',
    updates: {
      firstName
    }
  };
  const state = profileReducer(profile, action);
  expect(state.firstName).toBe(firstName);
});

test('should set profile', () => {
  const action = {
    type: 'SET_PROFILE',
    profile
  };
  const state = profileReducer({}, action);
  expect(state).toEqual(profile);
});
