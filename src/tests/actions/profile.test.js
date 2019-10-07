import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startCreateProfile,
  createProfile,
  editProfile,
  startEditProfile,
  setProfile,
  startSetProfile
} from '../../actions/profile';
import profile from '../fixtures/profile';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  database.ref(`users/${uid}/profile`).set(profile).then(() => done());
});

test('should setup edit profile action object', () => {
  const action = editProfile({ emergencyContactName: 'Gordon' });
  expect(action).toEqual({
    type: 'EDIT_PROFILE',
    updates: {
      emergencyContactName: 'Gordon'
    }
  });
});

test('should edit profile from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = { lastName: 'Garcia' };
  store.dispatch(startEditProfile(updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_PROFILE',
      updates
    });
    return database.ref(`users/${uid}/profile`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().lastName).toBe(updates.lastName);
    done();
  });
});

test('should setup create profile action object with provided values', () => {
  const action = createProfile(profile);
  expect(action).toEqual({
    type: 'CREATE_PROFILE',
    profile
  });
});

test('should add a profile to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const profileData = {
    firstName: 'Parm',
    lastName: 'Dhillon',
    emailAddress: 'parm@gmail.com',
    dateOfBirth: '9/23/97',
    gender: 'female',
    emergencyContactName: 'Douglas Dunn',
    emergencyContactNumber: '(408) 504-0230'
  };

  store.dispatch(startCreateProfile(profileData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'CREATE_PROFILE',
      profile: profileData
    });

    return database.ref(`users/${uid}/profile`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(profileData);
    done();
  });
});

test('should add a profile with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const profileDefaults = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    gender: '',
    emergencyContactName: '',
    emergencyContactNumber: ''
  };

  store.dispatch(startCreateProfile({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'CREATE_PROFILE',
      profile: profileDefaults
    });

    return database.ref(`users/${uid}/profile`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(profileDefaults);
    done();
  });
});

test('should setup set profile action object with data', () => {
  const action = setProfile(profile);
  expect(action).toEqual({
    type: 'SET_PROFILE',
    profile
  });
});

test('should fetch the profile from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetProfile()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_PROFILE',
      profile
    });
    done();
  });
});
