import uuid from 'uuid';
import database from '../firebase/firebase';

// CREATE_PROFILE
export const createProfile = (profile) => ({
  type: 'CREATE_PROFILE',
  profile
});

export const startCreateProfile = (profileData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      age = 0,
      emergencyContactName = '',
      emergencyContactNumber = ''
    } = profileData;
    const profile = { name, age, emergencyContactName, emergencyContactNumber };

    return database.ref(`users/${uid}/profile`).set(profile).then((ref) => {
      dispatch(createProfile({
        ...profile
      }));
    });
  };
};

// SET_PROFILE
export const setProfile = (profile) => ({
  type: 'SET_PROFILE',
  profile
});

export const startSetProfile = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/profile`).once('value').then((snapshot) => {
      dispatch(setProfile(snapshot.val()));
    });
  };
};
