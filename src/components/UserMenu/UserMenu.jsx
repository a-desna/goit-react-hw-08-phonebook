import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from '../../styles/Phonebook.module.css';

function UserMenu({ avatar, name, onLogout }) {
  return (
    <div className={styles.userMenu}>
      <img src={avatar} alt="" width="32" height="32" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
