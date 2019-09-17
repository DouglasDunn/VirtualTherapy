// DailyGoals Reducer

const dailyGoalsReducerDefaultState = [];

export default (state = dailyGoalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DAILY_GOAL':
      return [
        ...state,
        action.dailyGoal
      ];
    case 'SET_DAILY_GOALS':
      return action.dailyGoals;
    default:
      return state;
  }
};
