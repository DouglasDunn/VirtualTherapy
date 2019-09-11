import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <p>You have not yet setup a profile, please add some info</p>
    <Link to="/create-profile">
      Create Profile
    </Link>
  </div>
);

export default DashboardPage;
