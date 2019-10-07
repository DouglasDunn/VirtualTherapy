import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProfile } from './actions/profile';
// import { startSetDiagnoses } from './actions/diagnoses';
import { startSetDailyGoals } from './actions/dailyGoals';
import { startSetLongTermGoals } from './actions/longTermGoals';
import { startSetMedicationHistories } from './actions/medicationHistory';
// import { startSetDrugAllergy } from './actions/drugAllergy';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    // store.dispatch(startSetDiagnoses());
    store.dispatch(startSetDailyGoals());
    store.dispatch(startSetLongTermGoals());
    store.dispatch(startSetMedicationHistories());
    // store.dispatch(startSetDrugAllergy());
    store.dispatch(startSetProfile()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
