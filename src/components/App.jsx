import React, { Component, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import ThemeContext from './context/ThemeContext';
import Container from './common/Container/Container';
import Layout from './common/Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Loader from './common/Loader/Loader';
import ToastContainer from './common/ToastContainer/ToastContainer';
import routes from '../routes';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <ThemeContext>
        <Container>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Switch>
                {routes.map(route => {
                  return route.private ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute key={route.label} {...route} />
                  );
                })}
              </Switch>
            </Suspense>
            <ToastContainer />
          </Layout>
        </Container>
      </ThemeContext>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
