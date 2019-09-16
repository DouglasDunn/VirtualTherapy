import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosesListItem = ({ id, diagnoses, medication, time }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{diagnoses}</h3>
      <span className="list-item__sub-title">{medication}</span>
    </div>
    <h3 className="list-item__data">{time}</h3>
  </Link>
);

export default DiagnosesListItem;
