import database from '../firebase/firebase';

// ADD_DIAGNOSES
export const addDiagnoses = (diagnoses) => ({
  type: 'ADD_DIAGNOSES',
  diagnoses
});

export const startAddDiagnoses = (diagnosesData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      diagnoses = '',
      medication = '',
      time = ''
    } = diagnosesData;
    const diagnosesObject = { diagnoses, medication, time };

    return database.ref(`users/${uid}/diagnoses`).push(diagnosesObject).then((ref) => {
      dispatch(addDiagnoses({
        id: ref.key,
        ...diagnosesObject
      }));
    });
  };
};

// SET_DIAGNOSES
export const setDiagnoses = (diagnoses) => ({
  type: 'SET_DIAGNOSES',
  diagnoses
});

export const startSetDiagnoses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/diagnoses`).once('value').then((snapshot) => {
      const diagnoses = [];

      snapshot.forEach((childSnapshot) => {
        diagnoses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setDiagnoses(diagnoses));
    });
  };
};
