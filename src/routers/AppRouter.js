import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainDashboardPage from '../components/MainDashboardPage';
import CreateProfilePage from '../components/CreateProfilePage';
import EditProfilePage from '../components/EditProfilePage';
import DiagnosesDashboardPage from '../components/DiagnosesDashboardPage';
import AddDiagnosesPage from '../components/AddDiagnosesPage';
import GoalsPage from '../components/GoalsPage';
import MedicationHistoryDashboardPage from '../components/MedicationHistoryDashboardPage';
import AddMedicationHistoryPage from '../components/AddMedicationHistoryPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={MainDashboardPage} />
        <PrivateRoute path="/create-profile" component={CreateProfilePage} />
        <PrivateRoute path="/edit-profile" component={EditProfilePage} />
        <PrivateRoute path="/diagnoses" component={DiagnosesDashboardPage} />
        <PrivateRoute path="/add-diagnoses" component={AddDiagnosesPage} />
        <PrivateRoute path="/goals" component={GoalsPage} />
        <PrivateRoute path="/medication-history" component={MedicationHistoryDashboardPage} />
        <PrivateRoute path="/add-medication-history" component={AddMedicationHistoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
