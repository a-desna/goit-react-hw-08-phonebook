import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const withAuth = WrappedComponent => {
  function withAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    isLogIn: authSelectors.isLogIn(state),
  });

  return connect(mapStateToProps)(withAuth);
};

export default withAuth;
