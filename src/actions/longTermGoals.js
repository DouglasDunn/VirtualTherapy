import database from '../firebase/firebase';

// ADD_LONG_TERM_GOAL
export const addLongTermGoal = (longTermGoal) => ({
  type: 'ADD_LONG_TERM_GOAL',
  longTermGoal
});

export const startAddLongTermGoal = (longTermGoalData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      goal = '',
      completed = false
    } = longTermGoalData;
    const longTermGoal = { goal, completed };

    return database.ref(`users/${uid}/longTermGoals`).push(longTermGoal).then((ref) => {
      dispatch(addLongTermGoal({
        id: ref.key,
        ...longTermGoal
      }));
    });
  };
};

// SET_LONG_TERM_GOALS
export const setLongTermGoals = (longTermGoals) => ({
  type: 'SET_LONG_TERM_GOALS',
  longTermGoals
});

export const startSetLongTermGoals = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/longTermGoals`).once('value').then((snapshot) => {
      const longTermGoals = [];

      snapshot.forEach((childSnapshot) => {
        longTermGoals.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setLongTermGoals(longTermGoals));
    });
  };
};
