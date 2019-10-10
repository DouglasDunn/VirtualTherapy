// ExerciseQuestions Reducer

const exerciseQuestionsReducerDefaultState = {};

export default (state = exerciseQuestionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE_QUESTIONS':
      return {
        ...state,
        ...action.exerciseQuestions
      };
    default:
      return state;
  }
};
