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
      firstName = '',
      lastName = '',
      emailAddress = '',
      dateOfBirth = '',
      gender = '',
      emergencyContactName = '',
      emergencyContactNumber = ''
    } = profileData;
    const profile = { firstName, lastName, emailAddress, dateOfBirth, gender, emergencyContactName, emergencyContactNumber };

    return database.ref(`users/${uid}/profile`).set(profile).then((ref) => {
      dispatch(createProfile({
        ...profile
      }));
    });
  };
};

// EDIT_PROFILE
export const editProfile = (updates) => ({
  type: 'EDIT_PROFILE',
  updates
});

export const startEditProfile = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/profile`).update(updates).then(() => {
      dispatch(editProfile(updates));
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
