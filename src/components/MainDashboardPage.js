import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class MainDashboardPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.profile);

    if (Object.entries(props.profile).length === 0) {
      this.props.history.push('/create-profile');
    }
  }

  render() {
    return (
      <div className="dashboard__background">
        <div className="dashboard__container">
          <header className="dashboard__header">
            <h2 className="heading-secondary  u-margin-left-small">
              <span className="heading-secondary-header">
                Virtual Therapy
              </span>
            </h2>

            <button className="btn btn--yellow u-margin-right-small" onClick={this.props.startLogout}>Logout</button>
          </header>

          <div className="dashboard__content">
            <nav className="dashboard__sidebar">
              <ul className="dashboard__side-nav">
                <li className="dashboard__side-nav--item">
                  <a href="#" className="dashboard__side-nav--link">
                    <span>Drug Allergies</span>
                  </a>
                </li>

                <li className="dashboard__side-nav--item">
                  <a href="#" className="dashboard__side-nav--link">
                    <span>My Diagnoses</span>
                  </a>
                </li>

                <li className="dashboard__side-nav--item">
                  <a href="#" className="dashboard__side-nav--link">
                    <span>Medication History</span>
                  </a>
                </li>

                <li className="dashboard__side-nav--item">
                  <a href="#" className="dashboard__side-nav--link">
                    <span>Goals</span>
                  </a>
                </li>
              </ul>

              <div className="dashboard__legal">
                &copy; 2019 by Douglas Dunn. All rights reserved.
              </div>
            </nav>

            <main className="dashboard__view">
              <div className="u-center-text u-margin-top-big">
                <p className="paragraph">
                  Whoops! Looks like you need to fill out some information. Click the button below to get started!
                </p>
                <Link className="btn btn--yellow" to="/create-profile">
                  Create Profile
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboardPage);

// <div className="form__header--logo-box">
//   <h2 className="heading-secondary">
//     <span className="heading-secondary-header">Virtual Therapy</span>
//   </h2>
// </div>
//
// <div className="form__header--button-box">
//   <button className="btn btn--yellow" onClick={this.props.startLogout}>Logout</button>
// </div>

// export const MainDashboardPage = (props) => (
//   <div className="dashboard__background">
//     <div className="dashboard__container">
//       <header className="dashboard__header">
//         <div className="form__header--logo-box">
//           <h2 className="heading-secondary">
//             <span className="heading-secondary-header">Virtual Therapy</span>
//           </h2>
//         </div>
//
//         <div className="form__header--button-box">
//           <button className="btn btn--yellow" onClick={this.props.startLogout}>Logout</button>
//         </div>
//       </header>
//     </div>
//   </div>
// );

// {
//   props.profile ? (
//     <div>
//       <h2>Profile Information</h2>
//       <p>First Name: {props.profile.firstName}</p>
//       <p>Last Name: {props.profile.lastName}</p>
//       <p>Email Address: {props.profile.emailAddress}</p>
//       <p>Date of Birth: {props.profile.dateOfBirth}</p>
//       <p>Gender: {props.profile.gender}</p>
//       <p>Emergency Contact Name: {props.profile.emergencyContactName}</p>
//       <p>Emergency Contact Number: {props.profile.emergencyContactNumber}</p>
//       <Link className="button" to="/edit-profile">
//         Edit Profile
//       </Link>
//     </div>
//   ) : (
//     <div>
//       <p>You have not yet setup a profile, please add some info</p>
//       <Link className="button" to="/create-profile">
//         Create Profile
//       </Link>
//     </div>
//   )
// }
