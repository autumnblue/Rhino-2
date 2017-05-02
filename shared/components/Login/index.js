import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginComponent from './Login';
import SessionActions from '../../actions/sessions';
import LoginActions from '../../actions/login';

class Login extends Component {
  state = {
    email: null,
    password: null,
  }

  handleEmailChange = (username) => {
    this.setState({ username: username.value });
  }

  handlePasswordChange = (password) => {
    this.setState({ password: password.value });
  }

  handleRememberChange = (value) => {
    console.log(value);
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    const data = { username: username, password: password };
    this.props.userLoginRequest(data);
  }

  render() {
    return (
      <LoginComponent
        title="Login"
        backLink="/"
        valid={false}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleRememberChange={this.handleRememberChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({session, login}) => ({
  email: session.email,
  password: session.password,
  emailHint: login.emailHint,
  passwordHint: login.passwordHint,
  error: session.error,
});

const mapDispatchToProps = (dispatch) => ({
  validPassword: () => dispatch(LoginActions.validPassword()),
  validEmail: () => dispatch(LoginActions.validEmail()),
  userLoginRequest: (data) => dispatch(SessionActions.userLoginRequest(data)),
  resetSession: () => dispatch(SessionActions.resetSession()),
  setErrorMessage: (errors) => dispatch(SessionActions.setErrorMessage(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
