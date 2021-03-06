import React from 'react';
import { connect } from 'react-redux';
import { addDiagnoses, createDiagnoses } from '../actions/diagnoses';

const initialErrorState = {
  diagnosedError: '',
  diagnosesListError: ''
};

export class AddDiagnosesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diagnosed: this.props.diagnoses.length ? 'yes': 'no',
      diagnosesList: this.props.diagnoses.length ? this.props.diagnoses.map(({diagnoses}) => diagnoses).join(", "): '',
      ...initialErrorState
    };
  }

  onDiagnosedChange = (e) => {
    const diagnosed = e.target.value;
    this.setState(() => ({ diagnosed }));
  };

  onDiagnosesListChange = (e) => {
    const diagnosesList = e.target.value;
    this.setState(() => ({ diagnosesList }));
  };

  validate = () => {
    let diagnosedError = '';
    let diagnosesListError = '';

    if (!this.state.diagnosed) {
      diagnosedError = 'Please choose an option';
    }

    if ((this.state.diagnosed === 'yes') && !this.state.diagnosesList) {
      diagnosesListError = 'diagnoses list cannot be blank';
    } else {
      diagnosesListError = '';
    }

    if (diagnosedError || diagnosesListError) {
      this.setState({ diagnosedError, diagnosesListError });
      return false;
    }

    return true;
  };

  handlePrevious = () => {
    this.props.history.push('/add-drug-allergies');
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      if (this.state.diagnosed === 'no') {
        this.props.addDiagnoses([]);
        this.props.history.push('/exercise-questions');
      } else {
        this.props.createDiagnoses(this.state.diagnosesList);
        this.props.history.push('/add-medication');
      }
    }
  };

  renderDiagnosesList = () => {
    if (this.state.diagnosed === 'yes') {
      return (
        <div>
          {this.state.diagnosesListError && <p className="form__error">{this.state.diagnosesListError}</p>}
          <textarea
            placeholder="Type in all your symptoms and diagnoses separated by a comma"
            className="textarea"
            value={this.state.diagnosesList}
            onChange={this.onDiagnosesListChange}
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
            <h1 className="page-header__title">Add Diagnoses or Symptoms</h1>
          </div>
        </div>
        <div className="content-container">
          <form className="form">
            {this.state.diagnosedError && <p className="form__error">{this.state.diagnosedError}</p>}
            Has a doctor ever diagnosed you with a mental health disease?
            <label>
              <input
                type="radio"
                checked={this.state.diagnosed === 'yes'}
                className="radio-input"
                value="yes"
                onChange={this.onDiagnosedChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.diagnosed === 'no'}
                className="radio-input"
                value="no"
                onChange={this.onDiagnosedChange}
              />
              No
            </label>
            {this.renderDiagnosesList()}
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
  diagnoses: state.diagnoses
});

const mapDispatchToProps = (dispatch) => ({
  addDiagnoses: (diagnoses) => dispatch(addDiagnoses(diagnoses)),
  createDiagnoses: (diagnoses) => dispatch(createDiagnoses(diagnoses))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiagnosesPage);
