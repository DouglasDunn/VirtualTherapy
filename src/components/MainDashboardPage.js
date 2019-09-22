import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainDashboardPage = (props) => (
  <div>
    {
      props.profile ? (
        <div>
          <h2>Profile Information</h2>
          <p>First Name: {props.profile.firstName}</p>
          <p>Last Name: {props.profile.lastName}</p>
          <p>Email Address: {props.profile.emailAddress}</p>
          <p>Date of Birth: {props.profile.dateOfBirth}</p>
          <p>Gender: {props.profile.gender}</p>
          <p>Emergency Contact Name: {props.profile.emergencyContactName}</p>
          <p>Emergency Contact Number: {props.profile.emergencyContactNumber}</p>
          <Link className="button" to="/edit-profile">
            Edit Profile
          </Link>
        </div>
      ) : (
        <div>
          <p>You have not yet setup a profile, please add some info</p>
          <Link className="button" to="/create-profile">
            Create Profile
          </Link>
        </div>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
};

export default connect(mapStateToProps)(MainDashboardPage);
