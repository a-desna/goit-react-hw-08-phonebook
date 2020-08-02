import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactFilter from '../components/ContactFilter/ContactFilter';
import Loader from '../components/common/Loader/Loader';
import styles from '../styles/Phonebook.module.css';

class Phonebook extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { contacts, isLoadingContacts } = this.props;
    return (
      <div className={styles.phonebook}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length >= 2 && <ContactFilter />}
        {contacts.length > 0 && <ContactList />}
        {isLoadingContacts && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onGetContacts: contactsOperations.getContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
