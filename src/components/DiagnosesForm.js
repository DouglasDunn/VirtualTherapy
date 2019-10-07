import React from 'react';

export default class DiagnosesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diagnoses: '',
      medication: '',
      time: ''
    };
  }

  onDiagnosesChange = (e) => {
    const diagnoses = e.target.value;
    this.setState(() => ({ diagnoses }));
  };

  onMedicationChange = (e) => {
    const medication = e.target.value;
    this.setState(() => ({ medication }));
  };

  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState(() => ({ time }));
  };

  previousPage = () => {
    // this.props.history.push('/add-drug-allergies');
    console.log('previous');
    console.log(this.props);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      diagnoses: this.state.diagnoses,
      medication: this.state.medication,
      time: this.state.time
    });
    this.state.diagnoses = '';
    this.state.medication = '';
    this.state.time = '';
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <textarea
          placeholder="Type in all your symptoms and diagnoses separated by commas"
          className="textarea"
          value={this.state.drugAllergyList}
          onChange={this.onDrugAllergyListChange}
        >
        </textarea>
        <div>
          <button onClick={this.previousPage} className="button">Previous</button>
          <button className="button">Next</button>
        </div>
      </form>
    )
  }
}

// <input
//   type="text"
//   placeholder="Diagnoses or Symptom"
//   autoFocus
//   className="text-input"
//   value={this.state.diagnoses}
//   onChange={this.onDiagnosesChange}
// />
// <input
//   type="text"
//   placeholder="Medication"
//   className="text-input"
//   value={this.state.medication}
//   onChange={this.onMedicationChange}
// />
// <input
//   type="text"
//   placeholder="Time"
//   className="text-input"
//   value={this.state.time}
//   onChange={this.onTimeChange}
// />
