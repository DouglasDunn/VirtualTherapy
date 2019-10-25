import React from 'react';
import { Link } from 'react-router-dom';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    console.log('landing page');
  }

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
      </div>
    );
  }
}

export default LandingPage;
