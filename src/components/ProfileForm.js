import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      emergencyContactName: '',
      emergencyContactNumber: ''
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onAgeChange = (e) => {
    const age = e.target.value;
    this.setState(() => ({ age }));
  }

  onEmergencyContactNameChange = (e) => {
    const emergencyContactName = e.target.value;
    this.setState(() => ({ emergencyContactName }));
  }

  onEmergencyContactNumberChange = (e) => {
    const emergencyContactNumber = e.target.value;
    this.setState(() => ({ emergencyContactNumber }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      age: this.state.age,
      emergencyContactName: this.state.emergencyContactName,
      emergencyContactNumber: this.state.emergencyContactNumber,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Age"
          className="text-input"
          value={this.state.age}
          onChange={this.onAgeChange}
        />
        <input
          type="text"
          placeholder="Emergency Contact Name"
          className="text-input"
          value={this.state.emergencyContactName}
          onChange={this.onEmergencyContactNameChange}
        />
        <input
          type="text"
          placeholder="Emergency Contact Number"
          className="text-input"
          value={this.state.emergencyContactNumber}
          onChange={this.onEmergencyContactNumberChange}
        />
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    )
  }
}
