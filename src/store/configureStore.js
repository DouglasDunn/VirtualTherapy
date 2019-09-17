import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from '../reducers/profile';
import diagnosesReducer from '../reducers/diagnoses';
import dailyGoalsReducer from '../reducers/dailyGoals';
import longTermGoalsReducer from '../reducers/longTermGoals';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      profile: profileReducer,
      diagnoses: diagnosesReducer,
      dailyGoals: dailyGoalsReducer,
      longTermGoals: longTermGoalsReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
