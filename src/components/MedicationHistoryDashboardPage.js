import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MedicationHistoryListItem from './MedicationHistoryListItem';

export const MedicationHistoryDashboardPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Medication History</h1>
        <Link className="button" to="/add-medication-history">
          Add Medication
        </Link>
      </div>
    </div>
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Medication</div>
        <div className="show-for-desktop">Medication</div>
        <div className="show-for-desktop">Dose</div>
        <div className="show-for-desktop">Purpose</div>
        <div className="show-for-desktop">Side Effects</div>
        <div className="show-for-desktop">Current? If not, why?</div>
      </div>
      <div className="list-body">
      {
        props.medicationHistories.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No medication history, click the button above to add them.</span>
          </div>
        ) : (
          props.medicationHistories.map((medicationHistory) => {
            return <MedicationHistoryListItem key={medicationHistory.id} {...medicationHistory} />;
          })
        )
      }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    medicationHistories: state.medicationHistories
  };
};

export default connect(mapStateToProps)(MedicationHistoryDashboardPage);
