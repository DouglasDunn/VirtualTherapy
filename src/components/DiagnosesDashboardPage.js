import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DiagnosesListItem from './DiagnosesListItem';

export const DiagnosesDashboardPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Diagnoses or Symptoms</h1>
        <Link className="button" to="/add-diagnoses">
          Add Diagnoses
        </Link>
      </div>
    </div>
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Diagnoses</div>
        <div className="show-for-desktop">Diagnoses</div>
        <div className="show-for-desktop">Time</div>
      </div>
      <div className="list-body">
        {
          props.diagnoses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Diagnoses yet, click the button above to add them.</span>
            </div>
          ) : (
            props.diagnoses.map((diagnoses) => {
              return <DiagnosesListItem key={diagnoses.id} {...diagnoses} />;
            })
          )
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    diagnoses: state.diagnoses
  };
};

export default connect(mapStateToProps)(DiagnosesDashboardPage);
