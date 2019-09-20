import React from 'react';
import { Link } from 'react-router-dom';

const MedicationHistoryListItem = ({ id, medication, dose, purpose, sideEffects, current }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{medication}</h3>
      <h3 className="list-item__title">{dose}</h3>
      <h3 className="list-item__title">{purpose}</h3>
      <h3 className="list-item__title">{sideEffects}</h3>
      <h3 className="list-item__title">{current}</h3>
    </div>
  </Link>
);

export default MedicationHistoryListItem;
