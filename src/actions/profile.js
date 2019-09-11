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
