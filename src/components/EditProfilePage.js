import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startEditProfile } from '../actions/profile';

export class EditProfilePage extends React.Component {
  onSubmit = (profile) => {
    this.props.startEditProfile(profile);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Profile</h1>
          </div>
        </div>
        <div className="content-container">
          <ProfileForm
            profile={this.props.profile}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditProfile: (profile) => dispatch(startEditProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
