import React from 'react';
import { connect } from 'react-redux';
import DiagnosesForm from './DiagnosesForm';
// import { startAddExpense } from '../actions/expenses';

export class AddDiagnosesPage extends React.Component {
  // onSubmit = (expense) => {
  //   this.props.startAddExpense(expense);
  //   this.props.history.push('/');
  // };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Diagnoses or Symptoms</h1>
          </div>
        </div>
        <div className="content-container">
          <DiagnosesForm />
        </div>
      </div>
    );
  }
}

// <ExpenseForm
//   onSubmit={this.onSubmit}
// />

// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });

export default AddDiagnosesPage;
//export default connect(undefined, mapDispatchToProps)(AddExpensePage);
