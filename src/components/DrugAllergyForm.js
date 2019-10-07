import React from 'react';
import { connect } from 'react-redux';
import { addDrugAllergy, createDrugAllergy } from '../actions/drugAllergy';

const initialErrorState = {
  allergicToDrugsError: '',
  drugAllergyListError: ''
};

export class DrugAllergyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allergicToDrugs: this.props.drugAllergy.length ? 'yes' : 'no',
      drugAllergyList: this.props.drugAllergy.length ? this.props.drugAllergy.join(", ") : '',
      ...initialErrorState
    };
  }

  onAllergicToDrugsChange = (e) => {
    const allergicToDrugs = e.target.value;
    this.setState(() => ({ allergicToDrugs }));
  };

  onDrugAllergyListChange = (e) => {
    const drugAllergyList = e.target.value;
    this.setState(() => ({ drugAllergyList }));
  };

  validate = () => {
    let allergicToDrugsError = '';
    let drugAllergyListError = '';

    if (!this.state.allergicToDrugs) {
      allergicToDrugsError = 'Please choose an option';
    }

    if ((this.state.allergicToDrugs === 'yes') && !this.state.drugAllergyList) {
      drugAllergyListError = 'drug allergy list cannot be blank';
    } else {
      drugAllergyListError = '';
    }

    if (allergicToDrugsError || drugAllergyListError) {
      this.setState({ allergicToDrugsError, drugAllergyListError });
      return false;
    }

    return true;
  };

  handlePrevious = () => {
    this.props.history.push('/create-profile');
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      if (this.state.allergicToDrugs === 'no') {
        this.props.addDrugAllergy([]);
      } else {
        this.props.createDrugAllergy(this.state.drugAllergyList);
      }
      this.props.history.push('/add-diagnoses');
    }
  };

  renderDrugAllergyList = () => {
    if (this.state.allergicToDrugs === 'yes') {
      return (
        <div>
          {this.state.drugAllergyListError && <p className="form__error">{this.state.drugAllergyListError}</p>}
          <textarea
            placeholder="Type in all the drugs you are allergic to separated by a comma"
            className="textarea"
            value={this.state.drugAllergyList}
            onChange={this.onDrugAllergyListChange}
          >
          </textarea>
        </div>
      );
    }
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
          <form className="form">
            {this.state.allergicToDrugsError && <p className="form__error">{this.state.allergicToDrugsError}</p>}
            Are you allergic to any drugs?
            <label>
              <input
                type="radio"
                checked={this.state.allergicToDrugs === 'yes'}
                className="radio-input"
                value="yes"
                onChange={this.onAllergicToDrugsChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.allergicToDrugs === 'no'}
                className="radio-input"
                value="no"
                onChange={this.onAllergicToDrugsChange}
              />
              No
            </label>
            {this.renderDrugAllergyList()}
          </form>
          <div>
            <button onClick={this.handlePrevious} className="button">Previous</button>
            <button onClick={this.onSubmit} className="button">Next</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  drugAllergy: state.drugAllergy
});

const mapDispatchToProps = (dispatch) => ({
  addDrugAllergy: (drugAllergy) => dispatch(addDrugAllergy(drugAllergy)),
  createDrugAllergy: (drugAllergy) => dispatch(createDrugAllergy(drugAllergy))
});

export default connect(mapStateToProps, mapDispatchToProps)(DrugAllergyForm);
