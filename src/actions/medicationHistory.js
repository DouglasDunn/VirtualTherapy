import database from '../firebase/firebase';

// ADD_MEDICATION_HISTORY
export const addMedicationHistory = (medicationHistory) => ({
  type: 'ADD_MEDICATION_HISTORY',
  medicationHistory
});

export const startAddMedicationHistory = (medicationHistoryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      medication = '',
      dose = '',
      purpose = '',
      sideEffects = '',
      current = ''
    } = medicationHistoryData;
    const medicationHistory = { medication, dose, purpose, sideEffects, current };

    return database.ref(`users/${uid}/medicationHistories`).push(medicationHistory).then((ref) => {
      dispatch(addMedicationHistory({
        id: ref.key,
        ...medicationHistory
      }));
    });
  };
};

// SET_MEDICATION_HISTORY
export const setMedicationHistories = (medicationHistories) => ({
  type: 'SET_MEDICATION_HISTORIES',
  medicationHistories
});

export const startSetMedicationHistories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/medicationHistories`).once('value').then((snapshot) => {
      const medicationHistories = [];

      snapshot.forEach((childSnapshot) => {
        medicationHistories.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setMedicationHistories(medicationHistories));
    });
  };
};
