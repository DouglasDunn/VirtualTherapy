import React from 'react';
import { connect } from 'react-redux';
import { addDiscontinuedMedication, createDiscontinuedMedication } from '../actions/discontinuedMedication';

const initialErrorState = {
  discontinuedError: '',
  discontinuedMedicationListError: ''
};

export class AddDiscontinuedMedicationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discontinued: this.props.discontinuedMedication.length ? 'yes' : 'no',
      discontinuedMedicationList: this.props.discontinuedMedication.length ? this.props.discontinuedMedication.join(", ") : '',
      ...initialErrorState
    };
  }

  onDiscontinuedChange = (e) => {
    const discontinued = e.target.value;
    this.setState(() => ({ discontinued }));
  };

  onDiscontinuedMedicationListChange = (e) => {
    const discontinuedMedicationList = e.target.value;
    this.setState(() => ({ discontinuedMedicationList }));
  };

  validate = () => {
    let discontinuedError = '';
    let discontinuedMedicationListError = '';

    if (!this.state.discontinued) {
      discontinuedError = 'Please choose an option';
    }

    if ((this.state.discontinued === 'yes') && !this.state.discontinuedMedicationList) {
      discontinuedMedicationListError = 'discontinued medication list cannot be blank';
    } else {
      discontinuedMedicationListError = '';
    }

    if (discontinuedError || discontinuedMedicationListError) {
      this.setState({ discontinuedError, discontinuedMedicationListError });
      return false;
    }

    return true;
  };

  handlePrevious = () => {
    this.props.history.push('/add-medication');
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      if (this.state.discontinued === 'no') {
        this.props.addDiscontinuedMedication([]);
      } else {
        this.props.createDiscontinuedMedication(this.state.discontinuedMedicationList);
      }
      this.props.history.push('/exercise-questions');
    }
  };

  renderDiscontinuedMedicationList = () => {
    if (this.state.discontinued === 'yes') {
      return (
        <div>
          {this.state.discontinuedMedicationListError && <p className="form__error">{this.state.discontinuedMedicationListError}</p>}
          <textarea
            placeholder="Type in all the medications you discontinued due to side effects"
            className="textarea"
            value={this.state.discontinuedMedicationList}
            onChange={this.onDiscontinuedMedicationListChange}
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
            <h1 className="page-header__title">Add Discontinued Medications</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            {this.state.discontinuedError && <p className="form__error">{this.state.discontinuedError}</p>}
            Have you stopped taking any medications due to side effects?
            <label>
              <input
                type="radio"
                checked={this.state.discontinued === 'yes'}
                className="radio-input"
                value="yes"
                onChange={this.onDiscontinuedChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.discontinued === 'no'}
                className="radio-input"
                value="no"
                onChange={this.onDiscontinuedChange}
              />
              No
            </label>
            {this.renderDiscontinuedMedicationList()}
          </form>
          <div>
            <button onClick={this.handlePrevious} className="button">Previous</button>
            <button onClick={this.onSubmit} className="button">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  discontinuedMedication: state.discontinuedMedication
});

const mapDispatchToProps = (dispatch) => ({
  addDiscontinuedMedication: (discontinuedMedication) => dispatch(addDiscontinuedMedication(discontinuedMedication)),
  createDiscontinuedMedication: (discontinuedMedication) => dispatch(createDiscontinuedMedication(discontinuedMedication))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiscontinuedMedicationPage);
