import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

function PublicRoute({ component: Component, isLogIn, ...routeProps }) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogIn && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default withAuth(PublicRoute);
