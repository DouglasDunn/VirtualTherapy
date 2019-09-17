// LongTermGoals Reducer

const longTermGoalsReducerDefaultState = [];

export default (state = longTermGoalsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LONG_TERM_GOAL':
      return [
        ...state,
        action.longTermGoal
      ];
    case 'SET_LONG_TERM_GOALS':
      return action.longTermGoals;
    default:
      return state;
  }
};
