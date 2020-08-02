import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from '../../styles/Phonebook.module.css';

const Appbar = ({ isLogIn }) => (
  <header>
    <nav className={styles.navigation}>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </nav>
  </header>
);

const mapStateToProps = state => ({
  isLogIn: authSelectors.isLogIn(state),
});

export default connect(mapStateToProps)(Appbar);
