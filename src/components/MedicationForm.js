import React from 'react';

export default class MedicationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medication: props.diagnoses.medication ? props.diagnoses.medication : '',
      time: props.diagnoses.time ? props.diagnoses.time : ''
    };
  }

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

    this.props.onSubmit({
      medication: this.state.medication,
      time: this.state.time
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h2>{this.props.diagnoses.diagnoses}</h2>
        <input
          type="text"
          placeholder="Medication"
          autoFocus
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
