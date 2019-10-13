// SleepQuestions Reducer

const sleepQuestionsReducerDefaultState = {};

export default (state = sleepQuestionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SLEEP_QUESTIONS':
      return {
        ...state,
        ...action.sleepQuestions
      };
    default:
      return state;
  }
};
