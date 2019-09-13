import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const MainDashboardPage = (props) => (
  <div>
    {
      props.profile ? (
        <div>
          <p>Name: {props.profile.name}</p>
          <p>Age: {props.profile.age}</p>
          <p>Emergency Contact Name: {props.profile.emergencyContactName}</p>
          <p>Emergency Contact Number: {props.profile.emergencyContactNumber}</p>
          <Link className="button" to="/diagnoses">
            Add Diagnoses
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
