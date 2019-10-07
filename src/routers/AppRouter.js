import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainDashboardPage from '../components/MainDashboardPage';
// import CreateProfilePage from '../components/CreateProfilePage';
import ProfileForm from '../components/ProfileForm';
import EditProfilePage from '../components/EditProfilePage';
import DiagnosesDashboardPage from '../components/DiagnosesDashboardPage';
import AddDiagnosesPage from '../components/AddDiagnosesPage';
import GoalsPage from '../components/GoalsPage';
import MedicationHistoryDashboardPage from '../components/MedicationHistoryDashboardPage';
import AddMedicationHistoryPage from '../components/AddMedicationHistoryPage';
// import AddDrugAllergiesPage from '../components/AddDrugAllergiesPage';
import DrugAllergyForm from '../components/DrugAllergyForm';
import DrugAllergiesDashboardPage from '../components/DrugAllergiesDashboardPage';
import AddMedicationPage from '../components/AddMedicationPage';
import AddMedicationItemPage from '../components/AddMedicationItemPage';
import EditMedicationItemPage from '../components/EditMedicationItemPage';
import AddDiscontinuedMedicationPage from '../components/AddDiscontinuedMedicationPage';
import ExerciseQuestionsPage from '../components/ExerciseQuestionsPage';
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
        <PrivateRoute path="/create-profile" component={ProfileForm} />
        <PrivateRoute path="/edit-profile" component={EditProfilePage} />
        <PrivateRoute path="/diagnoses" component={DiagnosesDashboardPage} />
        <PrivateRoute path="/add-diagnoses" component={AddDiagnosesPage} />
        <PrivateRoute path="/goals" component={GoalsPage} />
        <PrivateRoute path="/medication-history" component={MedicationHistoryDashboardPage} />
        <PrivateRoute path="/add-medication-history" component={AddMedicationHistoryPage} />
        <PrivateRoute path="/add-drug-allergies" component={DrugAllergyForm} />
        <PrivateRoute path="/drug-allergies" component={DrugAllergiesDashboardPage} />
        <PrivateRoute exact path="/add-medication" component={AddMedicationPage} />
        <PrivateRoute path="/add-medication/:id" component={AddMedicationItemPage} />
        <PrivateRoute path="/edit-medication/:id" component={EditMedicationItemPage} />
        <PrivateRoute path="/add-discontinued-medication" component={AddDiscontinuedMedicationPage} />
        <PrivateRoute path="/exercise-questions" component={ExerciseQuestionsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
