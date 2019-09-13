import React from 'react';
import { Link } from 'react-router-dom';

export class DiagnosesDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Diagnoses or Symptons</h1>
            <Link className="button" to="/add-diagnoses">
              Add Diagnoses
            </Link>
          </div>
        </div>
        <div className="content-container">
          <div className="list-header">
            <div className="show-for-mobile">Diagnoses</div>
            <div className="show-for-desktop">Diagnoses</div>
            <div className="show-for-desktop">Medication</div>
          </div>
          <div className="list-body">
            <div className="list-item list-item--message">
              No Diagnoses yet, click the button above to add them.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosesDashboardPage;
