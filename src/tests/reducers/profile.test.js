import profileReducer from '../../reducers/profile';
import profile from '../fixtures/profile';

test('should set default state', () => {
  const state = profileReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should create a profile', () => {
  const profile = {
    name: 'Tyler Louie',
    age: 26,
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

test('should set profile', () => {
  const action = {
    type: 'SET_PROFILE',
    profile
  };
  const state = profileReducer({}, action);
  expect(state).toEqual(profile);
});
