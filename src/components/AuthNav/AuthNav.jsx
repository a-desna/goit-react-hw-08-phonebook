import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Phonebook.module.css';

function AuthNav() {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/login"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
