import database from '../firebase/firebase';

// ADD_DAILY_GOAL
export const addDailyGoal = (dailyGoal) => ({
  type: 'ADD_DAILY_GOAL',
  dailyGoal
});

export const startAddDailyGoal = (dailyGoalData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      goal = '',
      completed = false
    } = dailyGoalData;
    const dailyGoal = { goal, completed };

    return database.ref(`users/${uid}/dailyGoals`).push(dailyGoal).then((ref) => {
      dispatch(addDailyGoal({
        id: ref.key,
        ...dailyGoal
      }));
    });
  };
};

// SET_EXPENSES
export const setDailyGoals = (dailyGoals) => ({
  type: 'SET_DAILY_GOALS',
  dailyGoals
});

export const startSetDailyGoals = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/dailyGoals`).once('value').then((snapshot) => {
      const dailyGoals = [];

      snapshot.forEach((childSnapshot) => {
        dailyGoals.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setDailyGoals(dailyGoals));
    });
  };
};
