import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosesListItem = ({ id, diagnoses, medication, time }) => (
  <div className="list-item">
    {
      medication ? (
        <div>
          <div>
            <h3 className="list-item__title">{diagnoses}</h3>
            <span className="list-item__sub-title">{medication}</span>
          </div>
          <h3 className="list-item__data">{time}</h3>
          <Link className="button" to={`/edit-medication/${id}`}>Edit Medication</Link>
        </div>
      ) : (
        <div>
          <h3 className="list-item__title">{diagnoses}</h3>
          <Link className="button" to={`/add-medication/${id}`}>Add Medication</Link>
        </div>
      )
    }
  </div>
);

export default DiagnosesListItem;
