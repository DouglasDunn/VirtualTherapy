// DietQuestions Reducer

const dietQuestionsReducerDefaultState = {};

export default (state = dietQuestionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DIET_QUESTIONS':
      return {
        ...state,
        ...action.dietQuestions
      };
    default:
      return state;
  }
};
