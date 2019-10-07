import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const DrugAllergiesDashboardPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Drug Allergies</h1>
        <Link className="button" to="/add-drug-allergies">
          Add Drug Allergies
        </Link>
      </div>
    </div>
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Drug Allergies</div>
        <div className="show-for-desktop">Drug Allergies</div>
      </div>
      <div className="list-body">
        {
          props.drugAllergy.allergicToDrugs === undefined ? (
            <div className="list-item list-item--message">
              <span>No Drug Allergies yet, click the button above to add them.</span>
            </div>
          ) : (
            <Link className="list-item" to={`/edit/drugAllergies`}>
              <div>
                <h3 className="list-item__title">{props.drugAllergy.drugAllergyList}</h3>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    drugAllergy: state.drugAllergy
  };
};

export default connect(mapStateToProps)(DrugAllergiesDashboardPage);
