import React from 'react';
import { connect } from 'react-redux';
import DiagnosesForm from './DiagnosesForm';
import { startAddDiagnoses } from '../actions/diagnoses';

export class AddDiagnosesPage extends React.Component {
  onSubmit = (diagnoses) => {
    this.props.startAddDiagnoses(diagnoses);
    this.props.history.push('/diagnoses');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Diagnoses or Symptoms</h1>
          </div>
        </div>
        <div className="content-container">
          <DiagnosesForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddDiagnoses: (diagnoses) => dispatch(startAddDiagnoses(diagnoses))
});

export default connect(undefined, mapDispatchToProps)(AddDiagnosesPage);
