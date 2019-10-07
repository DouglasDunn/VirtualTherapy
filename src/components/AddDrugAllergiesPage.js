import React from 'react';
import { connect } from 'react-redux';
import DrugAllergyForm from './DrugAllergyForm';
import { startAddDrugAllergy } from '../actions/drugAllergy';

export class AddDrugAllergiesPage extends React.Component {
  onSubmit = (drugAllergy) => {
    this.props.startAddDrugAllergy(drugAllergy);
    this.props.history.push('/add-diagnoses');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Drug Allergies</h1>
          </div>
        </div>
        <div className="content-container">
          <DrugAllergyForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddDrugAllergy: (drugAllergy) => dispatch(startAddDrugAllergy(drugAllergy))
});

export default connect(undefined, mapDispatchToProps)(AddDrugAllergiesPage);
