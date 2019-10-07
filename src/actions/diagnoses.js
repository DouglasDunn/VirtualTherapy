import uuid from 'uuid';

// ADD_DIAGNOSES
export const addDiagnoses = (diagnoses) => ({
  type: 'ADD_DIAGNOSES',
  diagnoses
});

export const createDiagnoses = (diagnoses) => {
  return (dispatch) => {
    diagnoses = diagnoses
      .split(',')
      .map(diagnose => {
        const id = uuid.v4();
        return {
          id,
          diagnoses: diagnose.trim(),
          medication: "",
          time: ""
        };
      });
    dispatch(addDiagnoses(diagnoses));
  }
};

// ADD_MEDICATION
export const addEditMedication = (id, medicationObject) => ({
  type: 'ADD_EDIT_MEDICATION',
  id,
  medicationObject
});
