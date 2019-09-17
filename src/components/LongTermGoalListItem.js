import React from 'react';
import { Link } from 'react-router-dom';

const LongTermGoalListItem = ({ id, goal }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{goal}</h3>
    </div>
  </Link>
);

export default LongTermGoalListItem;
