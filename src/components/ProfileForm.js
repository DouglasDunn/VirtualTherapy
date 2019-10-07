import React from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../actions/profile';

const initialErrorState = {
  firstNameError: '',
  lastNameError: '',
  emailAddressError: '',
  dateOfBirthError: '',
  genderError: '',
  emergencyContactNameError: '',
  emergencyContactNumberError: ''
};

export class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.profile ? this.props.profile.firstName : '',
      lastName: this.props.profile ? this.props.profile.lastName : '',
      emailAddress: this.props.profile ? this.props.profile.emailAddress : '',
      dateOfBirth: this.props.profile ? this.props.profile.dateOfBirth : '',
      gender: this.props.profile ? this.props.profile.gender : '',
      emergencyContactName: this.props.profile ? this.props.profile.emergencyContactName : '',
      emergencyContactNumber: this.props.profile ? this.props.profile.emergencyContactNumber : '',
      ...initialErrorState
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

  validate = () => {
    let firstNameError = '';
    let lastNameError = '';
    let emailAddressError = '';
    let dateOfBirthError = '';
    let genderError = '';
    let emergencyContactNameError = '';
    let emergencyContactNumberError = '';

    if (!this.state.firstName) {
      firstNameError = 'first name cannot be blank';
    }

    if (!this.state.lastName) {
      lastNameError = 'last name cannot be blank';
    }

    if (!this.state.emailAddress.includes('@')) {
      emailAddressError = 'invalid email';
    }

    if (!this.state.dateOfBirth) {
      dateOfBirthError = 'date of birth cannot be blank';
    }

    if (!this.state.gender) {
      genderError = 'gender cannot be blank';
    }

    if (!this.state.emergencyContactName) {
      emergencyContactNameError = 'emergency contact name cannot be blank';
    }

    if (!this.state.emergencyContactNumber) {
      emergencyContactNumberError = 'emergency contact number cannot be blank';
    }

    if (firstNameError || lastNameError || emailAddressError || dateOfBirthError || genderError || emergencyContactNameError || emergencyContactNumberError) {
      this.setState({ firstNameError, lastNameError, emailAddressError, dateOfBirthError, genderError, emergencyContactNameError, emergencyContactNumberError });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.createProfile({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailAddress: this.state.emailAddress,
        dateOfBirth: this.state.dateOfBirth,
        gender: this.state.gender,
        emergencyContactName: this.state.emergencyContactName,
        emergencyContactNumber: this.state.emergencyContactNumber
      });
      this.props.history.push('/add-drug-allergies');
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.firstNameError && <p className="form__error">{this.state.firstNameError}</p>}
        <input
          type="text"
          placeholder="First Name"
          autoFocus
          className="text-input"
          value={this.state.firstName}
          onChange={this.onFirstNameChange}
        />
        {this.state.lastNameError && <p className="form__error">{this.state.lastNameError}</p>}
        <input
          type="text"
          placeholder="Last Name"
          className="text-input"
          value={this.state.lastName}
          onChange={this.onLastNameChange}
        />
        {this.state.emailAddressError && <p className="form__error">{this.state.emailAddressError}</p>}
        <input
          type="text"
          placeholder="Email Address"
          className="text-input"
          value={this.state.emailAddress}
          onChange={this.onEmailAddressChange}
        />
        {this.state.dateOfBirthError && <p className="form__error">{this.state.dateOfBirthError}</p>}
        <input
          type="text"
          placeholder="Date of Birth"
          className="text-input"
          value={this.state.dateOfBirth}
          onChange={this.onDateOfBirthChange}
        />
        {this.state.genderError && <p className="form__error">{this.state.genderError}</p>}
        Gender:
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
        {this.state.emergencyContactNameError && <p className="form__error">{this.state.emergencyContactNameError}</p>}
        <input
          type="text"
          placeholder="Emergency Contact Name"
          className="text-input"
          value={this.state.emergencyContactName}
          onChange={this.onEmergencyContactNameChange}
        />
        {this.state.emergencyContactNumberError && <p className="form__error">{this.state.emergencyContactNumberError}</p>}
        <input
          type="text"
          placeholder="Emergency Contact Number"
          className="text-input"
          value={this.state.emergencyContactNumber}
          onChange={this.onEmergencyContactNumberChange}
        />
        <div>
          <button className="button">Next</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (profile) => dispatch(createProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
