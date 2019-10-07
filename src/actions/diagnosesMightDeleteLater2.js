import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_DIAGNOSES
export const addDiagnoses = (diagnoses) => ({
  type: 'ADD_DIAGNOSES',
  diagnoses
});

// ADD_EMPTY_DIAGNOSES
export const addEmptyDiagnoses = (diagnoses) => ({
  type: 'ADD_EMPTY_DIAGNOSES',
  diagnoses
});

export const startAddDiagnoses = (diagnosesData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    let diagnosesObject = {};
    let diagnosesArray = [];
    console.log("diagnosesData " + diagnosesData.diagnosesList);
    if (diagnosesData.diagnosed === 'yes') {
      diagnosesArray = diagnosesData
        .diagnosesList.split(',').
        map(diagnoses => {
          const id = uuid.v4();
          return {
            id,
            diagnoses: diagnoses.trim()
          };
        });

      diagnosesArray.forEach(({ id, diagnoses }) => {
        diagnosesObject[id] = { diagnoses };
      });
    } else {
      diagnosesObject = 'No diagnoses';
    }

    return database.ref(`users/${uid}/diagnoses`).set(diagnosesObject).then((ref) => {
      if (diagnosesData.diagnosed === 'yes') {
        dispatch(addDiagnoses(diagnosesArray));
      } else {
        dispatch(addEmptyDiagnoses(diagnosesObject));
      }
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
      let diagnoses = [];

      snapshot.forEach((childSnapshot) => {
        diagnoses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      if (!diagnoses.length) {
        diagnoses = 'No diagnoses';
      }
      dispatch(setDiagnoses(diagnoses));
    });
  };
};
