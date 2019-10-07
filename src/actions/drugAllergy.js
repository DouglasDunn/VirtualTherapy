import database from '../firebase/firebase';

// ADD_DRUG_ALLERGY
export const addDrugAllergy = (drugAllergy) => ({
  type: 'ADD_DRUG_ALLERGY',
  drugAllergy
});

export const createDrugAllergy = (drugAllergies) => {
  return (dispatch) => {
    drugAllergies = drugAllergies.split(',').map(drugAllergy => drugAllergy.trim());
    dispatch(addDrugAllergy(drugAllergies));
  }
};

export const startAddDrugAllergy = (drugAllergyData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      allergicToDrugs = '',
      drugAllergyList = ''
    } = drugAllergyData;
    const drugAllergy = { allergicToDrugs, drugAllergyList };

    return database.ref(`users/${uid}/drugAllergy`).set(drugAllergy).then((ref) => {
      dispatch(addDrugAllergy({
        ...drugAllergy
      }));
    });
  };
};

// SET_DRUG_ALLERGY
export const setDrugAllergy = (drugAllergy) => ({
  type: 'SET_DRUG_ALLERGY',
  drugAllergy
});

export const startSetDrugAllergy = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/drugAllergy`).once('value').then((snapshot) => {
      dispatch(setDrugAllergy(snapshot.val()));
    });
  };
};
