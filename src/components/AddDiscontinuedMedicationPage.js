import React from 'react';

export class AddDiscontinuedMedicationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discontinuedMedication: '' ? 'yes' : 'no'
    };
  }

  onDiscontinuedMedicationChange = (e) => {
    const discontinuedMedication = e.target.value;
    this.setState(() => ({ discontinuedMedication }));
  };

  handlePrevious = () => {
    this.props.history.push('/add-medication');
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.history.push('/exercise-questions');
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
            Have you stopped taking any medications due to side effects?
            <label>
              <input
                type="radio"
                checked={this.state.discontinuedMedication === 'yes'}
                className="radio-input"
                value="yes"
                onChange={this.onDiscontinuedMedicationChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.discontinuedMedication === 'no'}
                className="radio-input"
                value="no"
                onChange={this.onDiscontinuedMedicationChange}
              />
              No
            </label>
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

export default AddDiscontinuedMedicationPage;
