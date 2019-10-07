import React from 'react';
import { connect } from 'react-redux';
import MedicationHistoryForm from './MedicationHistoryForm';
import { startAddMedicationHistory } from '../actions/medicationHistory';

export class AddMedicationHistoryPage extends React.Component {
  onSubmit = (medicationHistory) => {
    this.props.startAddMedicationHistory(medicationHistory);
    this.props.history.push('/medication-history');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Medication History</h1>
          </div>
        </div>
        <div className="content-container">
          <MedicationHistoryForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddMedicationHistory: (medicationHistory) => dispatch(startAddMedicationHistory(medicationHistory))
});

export default connect(undefined, mapDispatchToProps)(AddMedicationHistoryPage);
