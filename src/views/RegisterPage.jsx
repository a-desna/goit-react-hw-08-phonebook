import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Phonebook.module.css';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  notify = message => toast.warn(message);

  handleSubmit = e => {
    e.preventDefault();
    if (
      e.target.elements.email.value === '' ||
      e.target.elements.password.value === ''
    ) {
      this.notify('Not all data entered !');
      return;
    }
    this.props.onRegister({ ...this.state });
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form className={styles.formAuth} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="name"
            name="name"
            placeholder="Name.."
            autoComplete="off"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email.."
            autoComplete="off"
            value={email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password.."
            autoComplete="off"
            value={password}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={styles.formBtn} type="submit">
          Register
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
