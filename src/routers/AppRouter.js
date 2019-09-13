import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainDashboardPage from '../components/MainDashboardPage';
import CreateProfilePage from '../components/CreateProfilePage';
import DiagnosesDashboardPage from '../components/DiagnosesDashboardPage';
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
        <PrivateRoute path="/diagnoses" component={DiagnosesDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
