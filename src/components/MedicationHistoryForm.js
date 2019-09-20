import React from 'react';

export default class MedicationHistoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medication: '',
      dose: '',
      purpose: '',
      sideEffects: '',
      current: ''
    };
  }

  onMedicationChange = (e) => {
    const medication = e.target.value;
    this.setState(() => ({ medication }));
  };

  onDoseChange = (e) => {
    const dose = e.target.value;
    this.setState(() => ({ dose }));
  };

  onPurposeChange = (e) => {
    const purpose = e.target.value;
    this.setState(() => ({ purpose }));
  };

  onSideEffetsChange = (e) => {
    const sideEffects = e.target.value;
    this.setState(() => ({ sideEffects }));
  };

  onCurrentChange = (e) => {
    const current = e.target.value;
    this.setState(() => ({ current }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      medication: this.state.medication,
      dose: this.state.dose,
      purpose: this.state.purpose,
      sideEffects: this.state.sideEffects,
      current: this.state.current
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
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
          placeholder="Dose"
          className="text-input"
          value={this.state.dose}
          onChange={this.onDoseChange}
        />
        <textarea
          placeholder="Purpose"
          className="textarea"
          value={this.state.purpose}
          onChange={this.onPurposeChange}
        >
        </textarea>
        <textarea
          placeholder="Side Effects"
          className="textarea"
          value={this.state.sideEffects}
          onChange={this.onSideEffetsChange}
        >
        </textarea>
        <textarea
          placeholder="Current? If no, why not?"
          className="textarea"
          value={this.state.current}
          onChange={this.onCurrentChange}
        >
        </textarea>
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    )
  }
}
