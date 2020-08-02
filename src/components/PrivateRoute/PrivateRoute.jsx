import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

function PrivateRoute({ component: Component, isLogIn, ...routeProps }) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default withAuth(PrivateRoute);
