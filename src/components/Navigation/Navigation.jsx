import React from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import styles from '../../styles/Phonebook.module.css';

function Navigation({ isLogIn }) {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      {isLogIn && (
        <li>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default withAuth(Navigation);
