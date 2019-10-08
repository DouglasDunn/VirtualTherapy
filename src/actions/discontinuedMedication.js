import database from '../firebase/firebase';

// ADD_DISCONTINUED_MEDICATION
export const addDiscontinuedMedication = (discontinuedMedication) => ({
  type: 'ADD_DISCONTINUED_MEDICATION',
  discontinuedMedication
});

export const createDiscontinuedMedication = (discontinuedMedications) => {
  return (dispatch) => {
    discontinuedMedications = discontinuedMedications.split(',').map(discontinuedMedication => discontinuedMedication.trim());
    dispatch(addDiscontinuedMedication(discontinuedMedications));
  }
};
