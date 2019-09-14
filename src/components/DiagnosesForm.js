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

  onSubmit = (e) => {
    e.preventDefault();

    // this.props.onSubmit({
    //   name: this.state.name,
    //   age: this.state.age,
    //   emergencyContactName: this.state.emergencyContactName,
    //   emergencyContactNumber: this.state.emergencyContactNumber,
    // });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Diagnoses or Symptom"
          autoFocus
          className="text-input"
          value={this.state.diagnoses}
          onChange={this.onDiagnosesChange}
        />
        <input
          type="text"
          placeholder="Medication"
          className="text-input"
          value={this.state.medication}
          onChange={this.onMedicationChange}
        />
        <input
          type="text"
          placeholder="Time"
          className="text-input"
          value={this.state.time}
          onChange={this.onTimeChange}
        />
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    )
  }
}
