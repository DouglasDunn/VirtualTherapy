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
      <div className="background">
        <div className="container">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-secondary u-margin-top-big">
              Virtual Therapy
            </h2>
          </div>

          <div className="form-box">
            <form className="form" onSubmit={this.onSubmit}>
              {this.state.firstNameError && <p className="form__error">{this.state.firstNameError}</p>}
              <div className="form__group-inline">
                <input
                  autoFocus
                  type="text"
                  className="form__input"
                  placeholder="First Name"
                  id="first-name"
                  required
                  value={this.state.firstName}
                  onChange={this.onFirstNameChange}
                />
                <label htmlFor="first-name" className="form__label">
                  First Name
                </label>
              </div>

              {this.state.lastNameError && <p className="form__error">{this.state.lastNameError}</p>}
              <div className="form__group-inline">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Last Name"
                  id="last-name"
                  required
                  value={this.state.lastName}
                  onChange={this.onLastNameChange}
                />
                <label htmlFor="last-name" className="form__label">
                  Last Name
                </label>
              </div>

              {this.state.emailAddressError && <p className="form__error">{this.state.emailAddressError}</p>}
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  id="email-address"
                  required
                  value={this.state.emailAddress}
                  onChange={this.onEmailAddressChange}
                />
                <label htmlFor="email-address" className="form__label">
                  Email Address
                </label>
              </div>

              {this.state.dateOfBirthError && <p className="form__error">{this.state.dateOfBirthError}</p>}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Date of Birth"
                  id="date-of-birth"
                  required
                  value={this.state.dateOfBirth}
                  onChange={this.onDateOfBirthChange}
                />
                <label htmlFor="date-of-birth" className="form__label">
                  Date of Birth
                </label>
              </div>

              {this.state.genderError && <p className="form__error">{this.state.genderError}</p>}
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="male"
                    name="gender"
                    checked={this.state.gender === 'male'}
                    value="male"
                    onChange={this.onGenderChange}
                  />
                  <label htmlFor="male" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Male
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="female"
                    name="gender"
                    checked={this.state.gender === 'female'}
                    value="female"
                    onChange={this.onGenderChange}
                  />
                  <label htmlFor="female" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Female
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="other"
                    name="gender"
                    checked={this.state.gender === 'other'}
                    value="other"
                    onChange={this.onGenderChange}
                  />
                  <label htmlFor="other" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Other
                  </label>
                </div>
              </div>

              {this.state.emergencyContactNameError && <p className="form__error">{this.state.emergencyContactNameError}</p>}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Date of Birth"
                  id="date-of-birth"
                  required
                  value={this.state.dateOfBirth}
                  onChange={this.onDateOfBirthChange}
                />
                <label htmlFor="date-of-birth" className="form__label">
                  Date of Birth
                </label>
              </div>
              
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
          </div>
        </div>
      </div>
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
