import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log('private');
  console.log(isAuthenticated);
  console.log(Component);

  // change this file so that it checks if there is a profile. if not, redirect to /create-profile. change the ternary operator into and if else statement

  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

// export const PrivateRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => (
//     <Route {...rest} component={(props) => (
//       isAuthenticated ? (
//         <div>
//           <Header />
//           <Component {...props} />
//         </div>
//       ) : (
//           <Redirect to="/" />
//         )
//     )} />
//   );
