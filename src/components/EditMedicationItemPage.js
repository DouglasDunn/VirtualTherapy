import React from 'react';
import { connect } from 'react-redux';
import MedicationForm from './MedicationForm';
import { addEditMedication } from '../actions/diagnoses';

export class EditMedicationItemPage extends React.Component {
  onSubmit = (medicationObject) => {
    this.props.addEditMedication(
      this.props.diagnoses.id,
      medicationObject
    );
    this.props.history.push('/add-medication');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Medication</h1>
          </div>
        </div>
        <div className="content-container">
          <MedicationForm
            diagnoses={this.props.diagnoses}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  diagnoses: state.diagnoses.find((diagnose) => diagnose.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  addEditMedication: (id, medicationObject) => dispatch(addEditMedication(id, medicationObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMedicationItemPage);
