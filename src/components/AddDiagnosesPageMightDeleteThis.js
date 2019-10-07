import React from 'react';
import { connect } from 'react-redux';
import { startAddDiagnoses } from '../actions/diagnoses';

const initialErrorState = {
  diagnosedError: '',
  diagnosesListError: ''
};

export class AddDiagnosesPage extends React.Component {
  constructor(props) {
    super(props);
    let radioButton = 'no';
    let diagnosesArray;
    if (this.props.diagnoses) {
      if (Array.isArray(this.props.diagnoses)) {
        radioButton = 'yes';
        console.log(Array.isArray(this.props.diagnoses));
        console.log(this.props.diagnoses);
        diagnosesArray = this.props.diagnoses.map(({ diagnoses }) => diagnoses).join(', ');
      }
    }

    this.state = {
      diagnosed: this.props.diagnoses ? radioButton: '',
      diagnosesList: this.props.diagnoses ? diagnosesArray : '',
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
        this.props.startAddDiagnoses({
          diagnosed: this.state.diagnosed,
          diagnosesList: ''
        });
      } else {
        console.log(this.state.diagnosesList);
        this.props.startAddDiagnoses({
          diagnosed: this.state.diagnosed,
          diagnosesList: this.state.diagnosesList
        });
      }
      this.props.history.push('/add-medication');
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
  startAddDiagnoses: (diagnoses) => dispatch(startAddDiagnoses(diagnoses))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiagnosesPage);
