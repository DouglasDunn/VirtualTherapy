import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.profile ? props.profile.firstName : '',
      lastName: props.profile ? props.profile.lastName : '',
      emailAddress: props.profile ? props.profile.emailAddress : '',
      dateOfBirth: props.profile ? props.profile.dateOfBirth : '',
      gender: props.profile ? props.profile.gender : 'male',
      emergencyContactName: props.profile ? props.profile.emergencyContactName : '',
      emergencyContactNumber: props.profile ? props.profile.emergencyContactNumber : ''
    };
  }

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onEmailAddressChange = (e) => {
    const emailAddress = e.target.value;
    this.setState(() => ({ emailAddress }));
  };

  onDateOfBirthChange = (e) => {
    const dateOfBirth = e.target.value;
    this.setState(() => ({ dateOfBirth }));
  };

  onGenderChange = (e) => {
    const gender = e.target.value;
    this.setState(() => ({ gender }));
  };

  onEmergencyContactNameChange = (e) => {
    const emergencyContactName = e.target.value;
    this.setState(() => ({ emergencyContactName }));
  };

  onEmergencyContactNumberChange = (e) => {
    const emergencyContactNumber = e.target.value;
    this.setState(() => ({ emergencyContactNumber }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      emergencyContactName: this.state.emergencyContactName,
      emergencyContactNumber: this.state.emergencyContactNumber,
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="First Name"
          autoFocus
          className="text-input"
          value={this.state.firstName}
          onChange={this.onFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="text-input"
          value={this.state.lastName}
          onChange={this.onLastNameChange}
        />
        <input
          type="text"
          placeholder="Email Address"
          className="text-input"
          value={this.state.emailAddress}
          onChange={this.onEmailAddressChange}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          className="text-input"
          value={this.state.dateOfBirth}
          onChange={this.onDateOfBirthChange}
        />
        <label>
          <input
            type="radio"
            checked={this.state.gender === 'male'}
            className="radio-input"
            value="male"
            onChange={this.onGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            checked={this.state.gender === 'female'}
            className="radio-input"
            value="female"
            onChange={this.onGenderChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            checked={this.state.gender === 'other'}
            className="radio-input"
            value="other"
            onChange={this.onGenderChange}
          />
          Other
        </label>
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
