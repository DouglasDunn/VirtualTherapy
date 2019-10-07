import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startCreateProfile } from '../actions/profile';

export class CreateProfilePage extends React.Component {
  onSubmit = (profile) => {
    this.props.startCreateProfile(profile);
    this.props.history.push('/add-drug-allergies');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Create Profile Page</h1>
          </div>
        </div>
        <div className="content-container">
          <ProfileForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCreateProfile: (profile) => dispatch(startCreateProfile(profile))
});

export default connect(undefined, mapDispatchToProps)(CreateProfilePage);
